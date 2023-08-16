const data = {
    "id": "fca0f31a-2a7a-4d16-a1cd-78fd54497ee7",
    "type": "START_POINT",
    "name": "",
    "children": [
        {
            "id": "2d5dd621-c16f-4cb1-87a7-e3d300aad917",
            "type": "BOT_RESPONSE",
            "name": "Welcome message",
            "children": [
                {
                    "id": "89093c18-71a5-405e-99ca-3eed1f5e009c",
                    "type": "USER_INPUT",
                    "name": "✨ Main menu",
                    "configured": true,
                    "children": [
                        {
                            "id": "77c8959c-d084-4039-a25e-d98d08f1c3ce",
                            "type": "BOT_RESPONSE",
                            "name": "Main menu",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "7d1ee332-459e-499e-a3ae-18499ff73dca",
                    "type": "USER_INPUT",
                    "name": "🔥 Apply now — start",
                    "configured": true,
                    "children": [
                        {
                            "id": "cb7d211c-7707-48ec-8e48-297f3f3b14ff",
                            "type": "BOT_RESPONSE",
                            "name": "Ready to proceed?",
                            "children": [
                                {
                                    "id": "4efd28dd-a8e2-45a7-acc5-7da4a4fd3803",
                                    "type": "USER_INPUT",
                                    "name": "👍 Yes, let’s go",
                                    "configured": true,
                                    "children": [
                                        {
                                            "id": "a3797724-5b79-4847-8e49-a4b5e13dad42",
                                            "type": "ASK_A_QUESTION",
                                            "name": "Collect information",
                                            "children": [
                                                {
                                                    "id": "0ba05761-90a4-4c39-b37a-fa4f3c1ade71",
                                                    "type": "SUCCESS",
                                                    "name": "",
                                                    "children": [
                                                        {
                                                            "id": "76449ef0-ad99-48b8-9933-ac84c8ba2cd5",
                                                            "type": "BOT_RESPONSE",
                                                            "name": "🔥 Apply now — check information",
                                                            "children": [
                                                                {
                                                                    "id": "6c3b3c01-2e8f-491d-a8f0-3b4c242c0843",
                                                                    "type": "USER_INPUT",
                                                                    "name": "👍 Yes, proceed",
                                                                    "configured": true,
                                                                    "children": [
                                                                        {
                                                                            "id": "32164733-f2fd-43b9-b520-70f9e26a5def",
                                                                            "type": "BOT_RESPONSE",
                                                                            "name": "📎 Attach résumé",
                                                                            "children": [
                                                                                {
                                                                                    "id": "3afd20b8-1ec9-45f8-8e01-1a6dd812f62d",
                                                                                    "type": "ATTACHMENT",
                                                                                    "name": "Document",
                                                                                    "configured": true,
                                                                                    "children": [
                                                                                        {
                                                                                            "id": "b544cdb5-365e-4033-8205-9153d5d033ae",
                                                                                            "type": "BOT_RESPONSE",
                                                                                            "name": "📎 Attach photo",
                                                                                            "children": [
                                                                                                {
                                                                                                    "id": "ba91bbec-45d0-4565-91ed-85d075a8ac08",
                                                                                                    "type": "ATTACHMENT",
                                                                                                    "name": "Image",
                                                                                                    "configured": true,
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "id": "6f494dfe-210f-4405-b3e7-447e267a1a54",
                                                                                                            "type": "BOT_RESPONSE",
                                                                                                            "name": "📎 Attach video",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "id": "10aad1c0-1536-477b-8434-33cbca08ae7b",
                                                                                                                    "type": "ATTACHMENT",
                                                                                                                    "name": "Video",
                                                                                                                    "configured": true,
                                                                                                                    "children": [
                                                                                                                        {
                                                                                                                            "id": "c1d6497b-0dab-406a-8e44-3722f6c17d90",
                                                                                                                            "type": "BOT_RESPONSE",
                                                                                                                            "name": "Summary",
                                                                                                                            "children": [
                                                                                                                                {
                                                                                                                                    "id": "fbb20336-ef15-4208-87be-39f7dacf13af",
                                                                                                                                    "type": "USER_INPUT",
                                                                                                                                    "name": "✅ Submit",
                                                                                                                                    "configured": true,
                                                                                                                                    "children": [
                                                                                                                                        {
                                                                                                                                            "id": "7c965608-3c68-4809-9d3a-fa22e15ddfd0",
                                                                                                                                            "type": "BOT_RESPONSE",
                                                                                                                                            "name": "Thank you!",
                                                                                                                                            "children": []
                                                                                                                                        }
                                                                                                                                    ]
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "id": "bf5312f9-5da9-404f-87e2-c58eb707cbcf",
                                                                                                                                    "type": "USER_INPUT",
                                                                                                                                    "name": "❌ Make corrections",
                                                                                                                                    "configured": true,
                                                                                                                                    "children": [
                                                                                                                                        {
                                                                                                                                            "id": "c3c6c675-0cf8-416f-bcd0-a72a0564ff2e",
                                                                                                                                            "type": "GOTO",
                                                                                                                                            "name": "Go to 📎 Attach résumé",
                                                                                                                                            "children": []
                                                                                                                                        }
                                                                                                                                    ]
                                                                                                                                }
                                                                                                                            ]
                                                                                                                        }
                                                                                                                    ]
                                                                                                                },
                                                                                                                {
                                                                                                                    "id": "a6e7499e-3439-4ffa-9692-f9fefa6054cf",
                                                                                                                    "type": "USER_INPUT",
                                                                                                                    "name": "Skip video 👉",
                                                                                                                    "configured": true,
                                                                                                                    "children": [
                                                                                                                        {
                                                                                                                            "id": "ffaf1c26-fdfc-46f2-a105-7030fb71fef4",
                                                                                                                            "type": "SET_ATTRIBUTE",
                                                                                                                            "name": "video_attachment = Not added",
                                                                                                                            "children": [
                                                                                                                                {
                                                                                                                                    "id": "3f2f906b-2577-4103-a535-0cd38548999b",
                                                                                                                                    "type": "GOTO",
                                                                                                                                    "name": "Go to Summary",
                                                                                                                                    "children": []
                                                                                                                                }
                                                                                                                            ]
                                                                                                                        }
                                                                                                                    ]
                                                                                                                },
                                                                                                                {
                                                                                                                    "id": "adce99e3-8950-4de4-9aab-868c16efad79",
                                                                                                                    "type": "FALLBACK",
                                                                                                                    "name": "",
                                                                                                                    "children": [
                                                                                                                        {
                                                                                                                            "id": "adc93069-f1c7-40f6-a00d-1cf6a6b9aea1",
                                                                                                                            "type": "BOT_RESPONSE",
                                                                                                                            "name": "Video — supported file formats",
                                                                                                                            "children": [
                                                                                                                                {
                                                                                                                                    "id": "6ec728f4-487f-4355-899d-3ea668ac90ba",
                                                                                                                                    "type": "USER_INPUT",
                                                                                                                                    "name": "📎 Try again",
                                                                                                                                    "configured": true,
                                                                                                                                    "children": [
                                                                                                                                        {
                                                                                                                                            "id": "8b22096f-8f5e-4556-a059-ce438491004c",
                                                                                                                                            "type": "GOTO",
                                                                                                                                            "name": "Go to 📎 Attach video",
                                                                                                                                            "children": []
                                                                                                                                        }
                                                                                                                                    ]
                                                                                                                                },
                                                                                                                                {
                                                                                                                                    "id": "d35ca29f-f130-43b4-9afe-67a847490f3a",
                                                                                                                                    "type": "USER_INPUT",
                                                                                                                                    "name": "Skip video 👉",
                                                                                                                                    "configured": true,
                                                                                                                                    "children": [
                                                                                                                                        {
                                                                                                                                            "id": "a39a8b09-05b0-42be-9623-e2a30c87a517",
                                                                                                                                            "type": "SET_ATTRIBUTE",
                                                                                                                                            "name": "video_attachment = Not added",
                                                                                                                                            "children": [
                                                                                                                                                {
                                                                                                                                                    "id": "5a41cf1e-e09c-4e1c-820e-eba771c5526e",
                                                                                                                                                    "type": "GOTO",
                                                                                                                                                    "name": "Go to Summary",
                                                                                                                                                    "children": []
                                                                                                                                                }
                                                                                                                                            ]
                                                                                                                                        }
                                                                                                                                    ]
                                                                                                                                }
                                                                                                                            ]
                                                                                                                        }
                                                                                                                    ]
                                                                                                                }
                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    "id": "ce55a9d2-125f-4cec-b005-8f860a297bed",
                                                                                                    "type": "USER_INPUT",
                                                                                                    "name": "Skip photo 👉",
                                                                                                    "configured": true,
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "id": "97637657-0ffa-4fa8-884f-fb4343c7eaaf",
                                                                                                            "type": "SET_ATTRIBUTE",
                                                                                                            "name": "image_attachment = Not added",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "id": "d31f9013-34dc-4b59-b4ed-5c3c393e3158",
                                                                                                                    "type": "GOTO",
                                                                                                                    "name": "Go to 📎 Attach video",
                                                                                                                    "children": []
                                                                                                                }
                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    "id": "e83bb6b5-b296-40f6-ac59-73d804d79f58",
                                                                                                    "type": "FALLBACK",
                                                                                                    "name": "",
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "id": "4e88f773-9380-4f68-8398-424c9028a103",
                                                                                                            "type": "BOT_RESPONSE",
                                                                                                            "name": "Image — supported file formats",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "id": "d4d0f038-426d-4fc8-b817-d75b3bdd102f",
                                                                                                                    "type": "USER_INPUT",
                                                                                                                    "name": "📎 Try again",
                                                                                                                    "configured": true,
                                                                                                                    "children": [
                                                                                                                        {
                                                                                                                            "id": "ccc373c3-3901-4dd1-a36f-c1f208fdf6a6",
                                                                                                                            "type": "GOTO",
                                                                                                                            "name": "Go to 📎 Attach photo",
                                                                                                                            "children": []
                                                                                                                        }
                                                                                                                    ]
                                                                                                                },
                                                                                                                {
                                                                                                                    "id": "7ccdaad2-43db-4bbf-8330-f0d758f32b0e",
                                                                                                                    "type": "USER_INPUT",
                                                                                                                    "name": "Skip photo 👉",
                                                                                                                    "configured": true,
                                                                                                                    "children": [
                                                                                                                        {
                                                                                                                            "id": "64a4156f-509c-4a82-9b7c-ce5cb5c371d4",
                                                                                                                            "type": "SET_ATTRIBUTE",
                                                                                                                            "name": "image_attachment = Not added",
                                                                                                                            "children": [
                                                                                                                                {
                                                                                                                                    "id": "34a0d458-de7f-4f71-b099-757b76ee37a5",
                                                                                                                                    "type": "GOTO",
                                                                                                                                    "name": "Go to 📎 Attach video",
                                                                                                                                    "children": []
                                                                                                                                }
                                                                                                                            ]
                                                                                                                        }
                                                                                                                    ]
                                                                                                                }
                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                {
                                                                                    "id": "34b504eb-ebb6-4551-91d9-1f356c550826",
                                                                                    "type": "FALLBACK",
                                                                                    "name": "",
                                                                                    "children": [
                                                                                        {
                                                                                            "id": "75d413da-e650-4ff8-abc0-633f56a72f80",
                                                                                            "type": "BOT_RESPONSE",
                                                                                            "name": "Document — supported file formats",
                                                                                            "children": [
                                                                                                {
                                                                                                    "id": "f7a1539f-ce80-462c-85fd-b5a71a878d3a",
                                                                                                    "type": "USER_INPUT",
                                                                                                    "name": "📎 Try again",
                                                                                                    "configured": true,
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "id": "07af0cef-9cee-4a33-8767-9851e4b7966d",
                                                                                                            "type": "GOTO",
                                                                                                            "name": "Go to 📎 Attach resume",
                                                                                                            "children": []
                                                                                                        }
                                                                                                    ]
                                                                                                },
                                                                                                {
                                                                                                    "id": "b651c4ef-121d-4ea8-8128-4cad5d35bcad",
                                                                                                    "type": "USER_INPUT",
                                                                                                    "name": "Skip résumé 👉",
                                                                                                    "configured": true,
                                                                                                    "children": [
                                                                                                        {
                                                                                                            "id": "eb4cc83d-8635-442a-8bd4-1739371efaad",
                                                                                                            "type": "SET_ATTRIBUTE",
                                                                                                            "name": "document_attachment = Not added",
                                                                                                            "children": [
                                                                                                                {
                                                                                                                    "id": "29cddb98-ae1c-4e7d-bd3f-49555a26293c",
                                                                                                                    "type": "GOTO",
                                                                                                                    "name": "Go to 📎 Attach photo",
                                                                                                                    "children": []
                                                                                                                }
                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "id": "89df5559-94e1-424c-8c5a-68628e2d7ce2",
                                                                    "type": "USER_INPUT",
                                                                    "name": "👎 No, start again",
                                                                    "configured": true,
                                                                    "children": [
                                                                        {
                                                                            "id": "844b1e9b-0eea-4c78-b70f-f1f2c14daf3c",
                                                                            "type": "GOTO",
                                                                            "name": "Go to Collect information",
                                                                            "children": []
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": "acbb0968-c4b0-4b22-bb3a-95c25473608a",
                                                    "type": "FAILURE",
                                                    "name": "",
                                                    "children": [
                                                        {
                                                            "id": "1c699a0e-2fa7-4881-8f12-0803dc287f22",
                                                            "type": "BOT_RESPONSE",
                                                            "name": "Invalid email address or phone number",
                                                            "children": [
                                                                {
                                                                    "id": "f23c8881-54a7-4409-b023-291d01f59d9d",
                                                                    "type": "USER_INPUT",
                                                                    "name": "👈 Try again",
                                                                    "configured": true,
                                                                    "children": [
                                                                        {
                                                                            "id": "02b39a36-af95-4783-9c98-815f78d9710e",
                                                                            "type": "GOTO",
                                                                            "name": "Go to Collect information",
                                                                            "children": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "id": "46d0fa27-2509-4414-8619-f1ae8dd2eb59",
                                                                    "type": "USER_INPUT",
                                                                    "name": "👋 Goodbye",
                                                                    "configured": true,
                                                                    "children": [
                                                                        {
                                                                            "id": "43de846e-d0a6-4e34-a10a-30316ca2b86b",
                                                                            "type": "BOT_RESPONSE",
                                                                            "name": "Have a good day!",
                                                                            "children": [
                                                                                {
                                                                                    "id": "c5f5ba79-5f93-4288-a3c0-a68aa321d265",
                                                                                    "type": "CLOSE_CHAT",
                                                                                    "name": "",
                                                                                    "children": []
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "a50ad8aa-248e-485b-9c23-5c4edfeebc17",
                                    "type": "USER_INPUT",
                                    "name": "👎 No, not yet",
                                    "configured": true,
                                    "children": [
                                        {
                                            "id": "c665e0a1-16e4-4dc6-a3fd-fa5cad1ee57b",
                                            "type": "GOTO",
                                            "name": "Go to ✨ Main menu",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "5e02a32e-aa6f-4513-90f3-d01944e07c71",
                    "type": "USER_INPUT",
                    "name": "👐 Openings",
                    "configured": true,
                    "children": [
                        {
                            "id": "c8f43951-1e9f-4363-85da-01fe418d1a84",
                            "type": "BOT_RESPONSE",
                            "name": "🙌 Departments",
                            "children": [
                                {
                                    "id": "81ca3cda-f724-4160-8706-c45c65d98700",
                                    "type": "USER_INPUT",
                                    "name": "💙 Support",
                                    "configured": true,
                                    "children": [
                                        {
                                            "id": "ffd7aedb-2b93-4987-9ed7-507851a330cd",
                                            "type": "BOT_RESPONSE",
                                            "name": "💙 Support — open positions",
                                            "children": [
                                                {
                                                    "id": "18ff1a5b-f177-463d-ac45-da0d7c5f9500",
                                                    "type": "USER_INPUT",
                                                    "name": "💙 Support Hero",
                                                    "configured": true,
                                                    "children": [
                                                        {
                                                            "id": "d68f38e4-3e58-4a0a-afe7-53834844b2ca",
                                                            "type": "BOT_RESPONSE",
                                                            "name": "💙 Support Hero — job offer",
                                                            "children": [
                                                                {
                                                                    "id": "f89cfd12-beba-42dd-82f4-0a1477c7fb5a",
                                                                    "type": "USER_INPUT",
                                                                    "name": "💙 Apply for Support Hero",
                                                                    "configured": true,
                                                                    "children": [
                                                                        {
                                                                            "id": "0d93097d-e121-4a6e-9e4f-fcec5a49a3ea",
                                                                            "type": "SET_ATTRIBUTE",
                                                                            "name": "selected_position = Support Hero",
                                                                            "children": [
                                                                                {
                                                                                    "id": "cf903344-f794-45e6-90c9-153739cd96bd",
                                                                                    "type": "BOT_RESPONSE",
                                                                                    "name": "You’re applying for 💙 Support Hero",
                                                                                    "children": [
                                                                                        {
                                                                                            "id": "5658ccaf-2c5a-499b-8a2e-230d867fa786",
                                                                                            "type": "GOTO",
                                                                                            "name": "Go to 🔥 Apply now — start",
                                                                                            "children": []
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "id": "f197d53d-193c-477c-b360-4e1a676d95ff",
                                                    "type": "USER_INPUT",
                                                    "name": "💙 Account Manager",
                                                    "configured": true,
                                                    "children": [
                                                        {
                                                            "id": "930882e5-593c-46f2-bded-b08835d31da2",
                                                            "type": "BOT_RESPONSE",
                                                            "name": "💙 Account Manager — job offer",
                                                            "children": [
                                                                {
                                                                    "id": "7034cabb-59c3-4953-9493-2bb90a523327",
                                                                    "type": "USER_INPUT",
                                                                    "name": "💙 Apply for Account Manager",
                                                                    "configured": true,
                                                                    "children": [
                                                                        {
                                                                            "id": "34b60768-a85a-45c5-8d37-baa121921b01",
                                                                            "type": "SET_ATTRIBUTE",
                                                                            "name": "selected_position = Account Manager",
                                                                            "children": [
                                                                                {
                                                                                    "id": "d175fe56-09a8-41d2-ae5d-418b8a15457d",
                                                                                    "type": "BOT_RESPONSE",
                                                                                    "name": "You’re applying for 💙 Account Manager",
                                                                                    "children": [
                                                                                        {
                                                                                            "id": "3f7f312e-de00-48d4-b223-c3c3bbb71a8b",
                                                                                            "type": "GOTO",
                                                                                            "name": "Go to 🔥 Apply now — start",
                                                                                            "children": []
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "465bd383-8566-4e46-b77c-1066fd992f72",
                                    "type": "USER_INPUT",
                                    "name": "🧡 Product",
                                    "configured": true,
                                    "children": [
                                        {
                                            "id": "63c8baca-de56-4b07-9b96-8d2ca235eeaf",
                                            "type": "BOT_RESPONSE",
                                            "name": "🧡 Product — open positions",
                                            "children": [
                                                {
                                                    "id": "328bf756-9226-41fe-b542-6431ccad03db",
                                                    "type": "USER_INPUT",
                                                    "name": "🧡 Senior Frontend Developer",
                                                    "configured": true,
                                                    "children": [
                                                        {
                                                            "id": "586e6b79-41a9-47f7-91d9-60614ec5f977",
                                                            "type": "BOT_RESPONSE",
                                                            "name": "🧡 Senior Frontend Developer — job offer",
                                                            "children": [
                                                                {
                                                                    "id": "612f3242-4a61-4074-ba5e-4d8964ca4581",
                                                                    "type": "USER_INPUT",
                                                                    "name": "🧡 Apply for Senior Frontend Developer",
                                                                    "configured": true,
                                                                    "children": [
                                                                        {
                                                                            "id": "55b53522-db8b-49b7-b7d2-01e85682d0fc",
                                                                            "type": "SET_ATTRIBUTE",
                                                                            "name": "selected_position = Senior Frontend Developer",
                                                                            "children": [
                                                                                {
                                                                                    "id": "1c0907e8-066c-457d-a3e1-6821453179c5",
                                                                                    "type": "BOT_RESPONSE",
                                                                                    "name": "You’re applying for 🧡 Senior Frontend Developer",
                                                                                    "children": [
                                                                                        {
                                                                                            "id": "ecda015b-f95a-46b0-b889-c27b7eeb38fc",
                                                                                            "type": "GOTO",
                                                                                            "name": "Go to 🔥 Apply now — start",
                                                                                            "children": []
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "00ea5706-2e46-4b02-b3ec-3a33e9d253f0",
                                    "type": "USER_INPUT",
                                    "name": "❤️ Marketing",
                                    "configured": true,
                                    "children": [
                                        {
                                            "id": "e55f3bac-6d6e-4ba1-ae7c-539455535941",
                                            "type": "BOT_RESPONSE",
                                            "name": "❤️ Marketing — open positions",
                                            "children": [
                                                {
                                                    "id": "1e5975e7-de07-4eca-b0e2-500af48721a2",
                                                    "type": "USER_INPUT",
                                                    "name": "❤️ Graphic Designer",
                                                    "configured": true,
                                                    "children": [
                                                        {
                                                            "id": "64eb0e6f-bca0-40ed-9a96-92a1e45281aa",
                                                            "type": "BOT_RESPONSE",
                                                            "name": "❤️ Graphic Designer — job offer",
                                                            "children": [
                                                                {
                                                                    "id": "8edfab4e-8cbc-4666-a7fe-922c74412b4d",
                                                                    "type": "USER_INPUT",
                                                                    "name": "❤️ Apply for Graphic Designer",
                                                                    "configured": true,
                                                                    "children": [
                                                                        {
                                                                            "id": "ce4413db-9ee4-4d0f-8def-dbef82a028c2",
                                                                            "type": "SET_ATTRIBUTE",
                                                                            "name": "selected_position = Graphic Designer",
                                                                            "children": [
                                                                                {
                                                                                    "id": "0255e110-c4ae-44b1-bd3f-999b15354ed9",
                                                                                    "type": "BOT_RESPONSE",
                                                                                    "name": "You’re applying for ❤️ Graphic Designer",
                                                                                    "children": [
                                                                                        {
                                                                                            "id": "28244c42-5ab1-46e9-bfe9-13aa3bec6ce9",
                                                                                            "type": "GOTO",
                                                                                            "name": "Go to 🔥 Apply now — start",
                                                                                            "children": []
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "0a4c1464-5507-4bdf-b108-e343a5d5e52c",
                                    "type": "USER_INPUT",
                                    "name": "💛 Engineers",
                                    "configured": true,
                                    "children": [
                                        {
                                            "id": "d8cace32-2987-4337-81e9-6808060f9b0b",
                                            "type": "BOT_RESPONSE",
                                            "name": "💛 Engineers — open positions",
                                            "children": [
                                                {
                                                    "id": "d8164e09-1d99-463d-a941-b6871579e6ef",
                                                    "type": "USER_INPUT",
                                                    "name": "💛 Backend Developer",
                                                    "configured": true,
                                                    "children": [
                                                        {
                                                            "id": "61b7f51e-8f55-49b3-a393-3773fc81439a",
                                                            "type": "BOT_RESPONSE",
                                                            "name": "💛 Backend Developer — job offer",
                                                            "children": [
                                                                {
                                                                    "id": "db74c7d7-a43e-4804-8004-c162dc7ad151",
                                                                    "type": "USER_INPUT",
                                                                    "name": "💛 Apply for Backend Developer",
                                                                    "configured": true,
                                                                    "children": [
                                                                        {
                                                                            "id": "45554354-a53e-4e45-8471-a044ef01d719",
                                                                            "type": "SET_ATTRIBUTE",
                                                                            "name": "selected_position = Backend Developer",
                                                                            "children": [
                                                                                {
                                                                                    "id": "4bd9a717-f22a-425c-b1ff-d437675b4059",
                                                                                    "type": "BOT_RESPONSE",
                                                                                    "name": "You’re applying for 💛 Backend Developer",
                                                                                    "children": [
                                                                                        {
                                                                                            "id": "c663ae6f-700a-4f8a-88a9-0e7a4cd96313",
                                                                                            "type": "GOTO",
                                                                                            "name": "Go to 🔥 Apply now — start",
                                                                                            "children": []
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "id": "f0955d51-ea4e-4c48-8901-e3dd16df90a7",
                                    "type": "FALLBACK",
                                    "name": "",
                                    "children": [
                                        {
                                            "id": "db3e9ca3-b230-425e-9608-2f15da8b9708",
                                            "type": "BOT_RESPONSE",
                                            "name": "💡 Choose a button",
                                            "children": [
                                                {
                                                    "id": "1448d2b3-5ae0-4f63-aeef-237b35877c3f",
                                                    "type": "GOTO",
                                                    "name": "Go to 🙌 Departments",
                                                    "children": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "d3517710-cca9-4cec-8d43-eede6ad81a93",
                    "type": "USER_INPUT",
                    "name": "🏢 About the company",
                    "configured": true,
                    "children": [
                        {
                            "id": "3f5008fe-07ce-4879-bc14-c1af77647220",
                            "type": "BOT_RESPONSE",
                            "name": "The right place for you",
                            "children": [
                                {
                                    "id": "c67209bb-5728-4e78-9b7d-cda182764cc8",
                                    "type": "USER_INPUT",
                                    "name": "🏢 Company history",
                                    "configured": true,
                                    "children": [
                                        {
                                            "id": "397ed946-cc74-4f21-8c89-62f518a385e0",
                                            "type": "BOT_RESPONSE",
                                            "name": "Our history",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "2a50bcea-a584-40d9-abaa-0815826e82f4",
                    "type": "USER_INPUT",
                    "name": "🌐 Social media",
                    "configured": true,
                    "children": [
                        {
                            "id": "979dc2d0-b2ef-480d-b39b-d3761498505b",
                            "type": "BOT_RESPONSE",
                            "name": "Like and follow",
                            "children": []
                        }
                    ]
                },
                {
                    "id": "8172c4bb-66d3-47d7-b031-fe7372602c12",
                    "type": "USER_INPUT",
                    "name": "💌 Position not available?",
                    "configured": true,
                    "children": [
                        {
                            "id": "f016682f-9f3e-44ce-af46-5226ba4ba71c",
                            "type": "SET_ATTRIBUTE",
                            "name": "selected_position = Not available",
                            "children": [
                                {
                                    "id": "c8c01a5d-a049-4d3d-9d91-778317a410ee",
                                    "type": "BOT_RESPONSE",
                                    "name": "How about leaving your CV anyway?",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                {
                    "id": "6fb9f478-cd0d-46ad-b680-6d9df6f65907",
                    "type": "USER_INPUT",
                    "name": "⏳ Short on time",
                    "configured": true,
                    "children": [
                        {
                            "id": "b2673fd6-2001-4e5e-b020-8644354962ae",
                            "type": "SET_ATTRIBUTE",
                            "name": "selected_position = Not selected",
                            "children": [
                                {
                                    "id": "7bf357c3-84df-4311-a1c8-069dce3541a2",
                                    "type": "BOT_RESPONSE",
                                    "name": "Short on time? Leave a message",
                                    "children": [
                                        {
                                            "id": "6af8a3e9-28aa-4389-abaa-b39d4d97ebe5",
                                            "type": "GOTO",
                                            "name": "Go to 🔥 Apply now — start",
                                            "children": []
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "id": "3553690c-5941-4fd1-ac34-7d99b2f5c06f",
            "type": "DEFAULT_FALLBACK",
            "name": "",
            "children": [
                {
                    "id": "d6445c65-308a-4b06-b002-e09eb5d7b755",
                    "type": "BOT_RESPONSE",
                    "name": "Fallback message",
                    "children": []
                }
            ]
        }
    ]
}

export default data;