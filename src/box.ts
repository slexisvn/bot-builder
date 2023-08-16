enum BlockTypes {
  START_POINT = "START_POINT",
  GROUP = "GROUP",
  USER_INPUT = "USER_INPUT",
  FAQ = "FAQ",
  ATTACHMENT = "ATTACHMENT",
  BOT_RESPONSE = "BOT_RESPONSE",
  FALLBACK = "FALLBACK",
  FLOW = "FLOW",
  DEFAULT_FALLBACK = "DEFAULT_FALLBACK",
  GOTO = "GOTO",
  SET_ATTRIBUTE = "SET_ATTRIBUTE",
  CLOSE_CHAT = "CLOSE_CHAT",
  FILTER = "FILTER",
  ASK_A_QUESTION = "ASK_A_QUESTION",
  SUCCESS = "SUCCESS",
  FAILURE = "FAILURE",
}

interface BoxSize {
  height: number;
  width: number;
  size: [number, number];
}

export interface Box {
  value?: any
  id: string;
  type: BlockTypes;
  nested: any[];
  flowParent: this | null;
  children: this[];
  parent: this;
}

function createBox(
  height: number,
  width: number,
  extraHeight = 85,
  extraWidth = 100
): BoxSize {
  return {
    height,
    width,
    size: [height + extraHeight, width + extraWidth],
  };
}

function createStandardBox(index: number) {
  return createBox(18 + 47 * index, 200);
}

const BOX_TYPES: { [key in BlockTypes | "DEFAULT"]?: BoxSize } = {
  [BlockTypes.USER_INPUT]: createBox(60, 60, 80),
  [BlockTypes.ATTACHMENT]: createBox(60, 60, 80),
  [BlockTypes.FAQ]: createBox(60, 60, 80),
  [BlockTypes.FILTER]: createBox(40, 110),
  [BlockTypes.DEFAULT_FALLBACK]: createBox(40, 164),
  DEFAULT: createBox(40, 150),
};

const STANDARD_BOXES = Array(11).reduce((boxes, _, index) => {
  return { ...boxes, [index]: createStandardBox(index) };
}, {});

function getBoxSize(box: Box) {
  if (box.type === BlockTypes.GROUP) {
    return (
      STANDARD_BOXES[box.nested.length] || createStandardBox(box.nested.length)
    );
  }
  return BOX_TYPES[box.type] || BOX_TYPES.DEFAULT;
}

export default function processBoxes(rootBox: any) {
  const queue = [rootBox];
  const boxMap: { [key: string]: Box } = {};
  const boxArray: Box[] = [];

  while (queue.length) {
    const currentBox: Box = queue.pop();
    boxArray.push(currentBox);
    boxMap[currentBox.id] = currentBox;

    const flowParent =
      currentBox.type === BlockTypes.FLOW
        ? currentBox
        : currentBox.flowParent || null;
    const boxSize = getBoxSize(currentBox);
    const { width, height, size } = boxSize;

    Object.assign(currentBox, {
      width,
      height,
      size,
      flowParent,
    });

    if (currentBox.children) {
      for (let i = currentBox.children.length - 1; i >= 0; --i) {
        const childBox = currentBox.children[i];
        childBox.parent = currentBox;
        childBox.flowParent = currentBox.flowParent;
        queue.push(childBox);
      }
    }

    if (currentBox.nested) {
      for (let i = currentBox.nested.length - 1; i >= 0; --i) {
        const nestedBox = currentBox.nested[i];
        nestedBox.parent = currentBox;
        nestedBox.flowParent = currentBox.flowParent;
        nestedBox.nestedParent = currentBox;
        queue.push(nestedBox);
      }
    }
  }

  return {
    tree: rootBox,
    map: boxMap,
    array: boxArray,
  };
}
