const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(express.json()); // ใช้การแปลง JSON ในตัวของ Express
app.use(bodyParser.json());

const LINE_ACCESS_TOKEN = process.env.LINE_ACCESS_TOKEN;

app.post("/webhook", async (req, res) => {
  console.log('Request body:', req.body); // ตรวจสอบข้อมูลที่ได้รับ
  
  const events = req.body.events;

  if (events && events.length > 0) {
    for (const event of events) {
      if (event.type === "message" && event.message.type === "text") {
        const userMessage = event.message.text.trim().toLowerCase(); // แปลงข้อความเป็นพิมพ์เล็กและตัดช่องว่าง
        const currentHour = new Date().getUTCHours() + 7; // แปลงเป็นเวลาในประเทศไทย

        console.log("Current Hour:", currentHour); // ตรวจสอบค่าเวลาปัจจุบัน

        if (userMessage === "bonustime") {
          let messageData;

        if (currentHour >= 0 && currentHour < 2) {
          // เวลาตั้งแต่ 00:00 ถึง 02:00

            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      {
                    "type": "carousel",
                    "contents": [
                      {
                        "type": "bubble",
                        "body": {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "image",
                              "url": "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                              "size": "full",
                              "aspectRatio": "1:1.6667",
                              "gravity": "top",
                              "aspectMode": "fit"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "ตั้งแต่เวลา 00:00 - 02:00",
                                  "color": "#ffffff",
                                  "size": "xl",
                                  "weight": "bold",
                                  "align": "center"
                                }
                              ],
                              "offsetTop": "320px",
                              "width": "100%",
                              "backgroundColor": "#00000000",
                              "position": "absolute"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  "animated": true,
                                  "size": "full",
                                  "aspectMode": "fit",
                                  "offsetTop": "110px"
                                },
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                  "size": "60px",
                                  "offsetTop": "130px"
                                }
                              ],
                              "position": "absolute",
                              "width": "300px",
                              "height": "500px"
                            }
                          ],
                          "paddingAll": "0px"
                        }
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
                    ],
                  },
                },
              ],
            };
        } else if (currentHour >= 2 && currentHour < 4) {
          // เวลาตั้งแต่ 02:00 ถึง 04:00
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      {
                    "type": "carousel",
                    "contents": [
                      {
                        "type": "bubble",
                        "body": {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "image",
                              "url": "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                              "size": "full",
                              "aspectRatio": "1:1.6667",
                              "gravity": "top",
                              "aspectMode": "fit"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "ตั้งแต่เวลา 02:00 - 04:00",
                                  "color": "#ffffff",
                                  "size": "xl",
                                  "weight": "bold",
                                  "align": "center"
                                }
                              ],
                              "offsetTop": "320px",
                              "width": "100%",
                              "backgroundColor": "#00000000",
                              "position": "absolute"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  "animated": true,
                                  "size": "full",
                                  "aspectMode": "fit",
                                  "offsetTop": "110px"
                                },
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                  "size": "60px",
                                  "offsetTop": "130px"
                                }
                              ],
                              "position": "absolute",
                              "width": "300px",
                              "height": "500px"
                            }
                          ],
                          "paddingAll": "0px"
                        }
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
                    ],
                  },
                },
              ],
            };
          } else if (currentHour >= 4 && currentHour < 6) {
            // เวลาตั้งแต่ 04:00 ถึง 06:00
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      {
                    "type": "carousel",
                    "contents": [
                      {
                        "type": "bubble",
                        "body": {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "image",
                              "url": "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                              "size": "full",
                              "aspectRatio": "1:1.6667",
                              "gravity": "top",
                              "aspectMode": "fit"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "ตั้งแต่เวลา 04:00 - 06:00",
                                  "color": "#ffffff",
                                  "size": "xl",
                                  "weight": "bold",
                                  "align": "center"
                                }
                              ],
                              "offsetTop": "320px",
                              "width": "100%",
                              "backgroundColor": "#00000000",
                              "position": "absolute"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  "animated": true,
                                  "size": "full",
                                  "aspectMode": "fit",
                                  "offsetTop": "110px"
                                },
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                  "size": "60px",
                                  "offsetTop": "130px"
                                }
                              ],
                              "position": "absolute",
                              "width": "300px",
                              "height": "500px"
                            }
                          ],
                          "paddingAll": "0px"
                        }
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
                    ],
                  },
                },
              ],
            };
        } else if (currentHour >= 6 && currentHour < 8) {
          // เวลาตั้งแต่ 06:00 ถึง 08:00
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      {
                    "type": "carousel",
                    "contents": [
                      {
                        "type": "bubble",
                        "body": {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "image",
                              "url": "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                              "size": "full",
                              "aspectRatio": "1:1.6667",
                              "gravity": "top",
                              "aspectMode": "fit"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "ตั้งแต่เวลา 06:00 - 08:00",
                                  "color": "#ffffff",
                                  "size": "xl",
                                  "weight": "bold",
                                  "align": "center"
                                }
                              ],
                              "offsetTop": "320px",
                              "width": "100%",
                              "backgroundColor": "#00000000",
                              "position": "absolute"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  "animated": true,
                                  "size": "full",
                                  "aspectMode": "fit",
                                  "offsetTop": "110px"
                                },
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                  "size": "60px",
                                  "offsetTop": "130px"
                                }
                              ],
                              "position": "absolute",
                              "width": "300px",
                              "height": "500px"
                            }
                          ],
                          "paddingAll": "0px"
                        }
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
                    ],
                  },
                },
              ],
            };
        } else if (currentHour >= 8 && currentHour < 10) {
          // เวลาตั้งแต่ 08:00 ถึง 10:00
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      {
                    "type": "carousel",
                    "contents": [
                      {
                        "type": "bubble",
                        "body": {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "image",
                              "url": "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                              "size": "full",
                              "aspectRatio": "1:1.6667",
                              "gravity": "top",
                              "aspectMode": "fit"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "ตั้งแต่เวลา 08:00 - 10:00",
                                  "color": "#ffffff",
                                  "size": "xl",
                                  "weight": "bold",
                                  "align": "center"
                                }
                              ],
                              "offsetTop": "320px",
                              "width": "100%",
                              "backgroundColor": "#00000000",
                              "position": "absolute"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  "animated": true,
                                  "size": "full",
                                  "aspectMode": "fit",
                                  "offsetTop": "110px"
                                },
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                  "size": "60px",
                                  "offsetTop": "130px"
                                }
                              ],
                              "position": "absolute",
                              "width": "300px",
                              "height": "500px"
                            }
                          ],
                          "paddingAll": "0px"
                        }
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
                    ],
                  },
                },
              ],
            };
          } else if (currentHour >= 10 && currentHour < 12) {
          // เวลาตั้งแต่ 10:00 ถึง 12:00
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      {
                    "type": "carousel",
                    "contents": [
                      {
                        "type": "bubble",
                        "body": {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "image",
                              "url": "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                              "size": "full",
                              "aspectRatio": "1:1.6667",
                              "gravity": "top",
                              "aspectMode": "fit"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "ตั้งแต่เวลา 10:00 - 12:00",
                                  "color": "#ffffff",
                                  "size": "xl",
                                  "weight": "bold",
                                  "align": "center"
                                }
                              ],
                              "offsetTop": "320px",
                              "width": "100%",
                              "backgroundColor": "#00000000",
                              "position": "absolute"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  "animated": true,
                                  "size": "full",
                                  "aspectMode": "fit",
                                  "offsetTop": "110px"
                                },
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                  "size": "60px",
                                  "offsetTop": "130px"
                                }
                              ],
                              "position": "absolute",
                              "width": "300px",
                              "height": "500px"
                            }
                          ],
                          "paddingAll": "0px"
                        }
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
                    ],
                  },
                },
              ],
            };
          } else if (currentHour >= 12 && currentHour < 14) {
          // เวลาตั้งแต่ 12:00 ถึง 14:00
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      {
                    "type": "carousel",
                    "contents": [
                      {
                        "type": "bubble",
                        "body": {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "image",
                              "url": "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                              "size": "full",
                              "aspectRatio": "1:1.6667",
                              "gravity": "top",
                              "aspectMode": "fit"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "ตั้งแต่เวลา 12:00 - 14:00",
                                  "color": "#ffffff",
                                  "size": "xl",
                                  "weight": "bold",
                                  "align": "center"
                                }
                              ],
                              "offsetTop": "320px",
                              "width": "100%",
                              "backgroundColor": "#00000000",
                              "position": "absolute"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  "animated": true,
                                  "size": "full",
                                  "aspectMode": "fit",
                                  "offsetTop": "110px"
                                },
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                  "size": "60px",
                                  "offsetTop": "130px"
                                }
                              ],
                              "position": "absolute",
                              "width": "300px",
                              "height": "500px"
                            }
                          ],
                          "paddingAll": "0px"
                        }
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
                    ],
                  },
                },
              ],
            };
          } else if (currentHour >= 14 && currentHour < 16) {
          // เวลาตั้งแต่ 14:00 ถึง 16:00
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      {
                    "type": "carousel",
                    "contents": [
                      {
                        "type": "bubble",
                        "body": {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "image",
                              "url": "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                              "size": "full",
                              "aspectRatio": "1:1.6667",
                              "gravity": "top",
                              "aspectMode": "fit"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "ตั้งแต่เวลา 14:00 - 16:00",
                                  "color": "#ffffff",
                                  "size": "xl",
                                  "weight": "bold",
                                  "align": "center"
                                }
                              ],
                              "offsetTop": "320px",
                              "width": "100%",
                              "backgroundColor": "#00000000",
                              "position": "absolute"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  "animated": true,
                                  "size": "full",
                                  "aspectMode": "fit",
                                  "offsetTop": "110px"
                                },
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                  "size": "60px",
                                  "offsetTop": "130px"
                                }
                              ],
                              "position": "absolute",
                              "width": "300px",
                              "height": "500px"
                            }
                          ],
                          "paddingAll": "0px"
                        }
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
                    ],
                  },
                },
              ],
            };
          } else if (currentHour >= 16 && currentHour < 18) {
          // เวลาตั้งแต่ 16:00 ถึง 18:00
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      {
                    "type": "carousel",
                    "contents": [
                      {
                        "type": "bubble",
                        "body": {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "image",
                              "url": "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                              "size": "full",
                              "aspectRatio": "1:1.6667",
                              "gravity": "top",
                              "aspectMode": "fit"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "ตั้งแต่เวลา 16:00 - 18:00",
                                  "color": "#ffffff",
                                  "size": "xl",
                                  "weight": "bold",
                                  "align": "center"
                                }
                              ],
                              "offsetTop": "320px",
                              "width": "100%",
                              "backgroundColor": "#00000000",
                              "position": "absolute"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  "animated": true,
                                  "size": "full",
                                  "aspectMode": "fit",
                                  "offsetTop": "110px"
                                },
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                  "size": "60px",
                                  "offsetTop": "130px"
                                }
                              ],
                              "position": "absolute",
                              "width": "300px",
                              "height": "500px"
                            }
                          ],
                          "paddingAll": "0px"
                        }
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
                    ],
                  },
                },
              ],
            };
          } else if (currentHour >= 18 && currentHour < 20) {
          // เวลาตั้งแต่ 18:00 ถึง 20:00
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      {
                    "type": "carousel",
                    "contents": [
                      {
                        "type": "bubble",
                        "body": {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "image",
                              "url": "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                              "size": "full",
                              "aspectRatio": "1:1.6667",
                              "gravity": "top",
                              "aspectMode": "fit"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "ตั้งแต่เวลา 18:00 - 20:00",
                                  "color": "#ffffff",
                                  "size": "xl",
                                  "weight": "bold",
                                  "align": "center"
                                }
                              ],
                              "offsetTop": "320px",
                              "width": "100%",
                              "backgroundColor": "#00000000",
                              "position": "absolute"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  "animated": true,
                                  "size": "full",
                                  "aspectMode": "fit",
                                  "offsetTop": "110px"
                                },
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                  "size": "60px",
                                  "offsetTop": "130px"
                                }
                              ],
                              "position": "absolute",
                              "width": "300px",
                              "height": "500px"
                            }
                          ],
                          "paddingAll": "0px"
                        }
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
                    ],
                  },
                },
              ],
            };
          } else if (currentHour >= 20 && currentHour < 22) {
          // เวลาตั้งแต่ 20:00 ถึง 22:00
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      {
                    "type": "carousel",
                    "contents": [
                      {
                        "type": "bubble",
                        "body": {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "image",
                              "url": "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                              "size": "full",
                              "aspectRatio": "1:1.6667",
                              "gravity": "top",
                              "aspectMode": "fit"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "ตั้งแต่เวลา 20:00 - 22:00",
                                  "color": "#ffffff",
                                  "size": "xl",
                                  "weight": "bold",
                                  "align": "center"
                                }
                              ],
                              "offsetTop": "320px",
                              "width": "100%",
                              "backgroundColor": "#00000000",
                              "position": "absolute"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  "animated": true,
                                  "size": "full",
                                  "aspectMode": "fit",
                                  "offsetTop": "110px"
                                },
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                  "size": "60px",
                                  "offsetTop": "130px"
                                }
                              ],
                              "position": "absolute",
                              "width": "300px",
                              "height": "500px"
                            }
                          ],
                          "paddingAll": "0px"
                        }
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
                    ],
                  },
                },
              ],
            };
          } else if (currentHour >= 22 && currentHour < 0) {
          // เวลาตั้งแต่ 22:00 ถึง 00:00
            messageData = {
              to: event.source.userId,
              messages: [
                {
                  type: "flex",
                  altText: "BONUSTIME ที่กำลังแตกในช่วงนี้",
                  contents: {
                    type: "carousel",
                    contents: [
                      // ใส่ bubble ที่คุณต้องการ
                      {
                    "type": "carousel",
                    "contents": [
                      {
                        "type": "bubble",
                        "body": {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [
                            {
                              "type": "image",
                              "url": "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                              "size": "full",
                              "aspectRatio": "1:1.6667",
                              "gravity": "top",
                              "aspectMode": "fit"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "text",
                                  "text": "ตั้งแต่เวลา 22:00 - 00:00",
                                  "color": "#ffffff",
                                  "size": "xl",
                                  "weight": "bold",
                                  "align": "center"
                                }
                              ],
                              "offsetTop": "320px",
                              "width": "100%",
                              "backgroundColor": "#00000000",
                              "position": "absolute"
                            },
                            {
                              "type": "box",
                              "layout": "vertical",
                              "contents": [
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  "animated": true,
                                  "size": "full",
                                  "aspectMode": "fit",
                                  "offsetTop": "110px"
                                },
                                {
                                  "type": "image",
                                  "url": "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                  "size": "60px",
                                  "offsetTop": "130px"
                                }
                              ],
                              "position": "absolute",
                              "width": "300px",
                              "height": "500px"
                            }
                          ],
                          "paddingAll": "0px"
                        }
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1ihrNsUzGCBtHbH1LrdOXP8CmTOwy7m3y",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/14m4VT8eNGFKt6R8kDSBmlMmSu3fJLJ4g",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1L9vCXJcmxlvlpCCPAzVO6ZgBUGf_2RJa",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                          ],
                          paddingAll: "0px",
                        },
                      },
                      {
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1QalzmzUCLayGeOpJWWN7XtQsR0X1dmTX",
                              size: "full",
                              aspectMode: "fit",
                              aspectRatio: "3:5",
                              gravity: "top",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/177jyoiiRTJxv85510vdIHoM0vEVX4l0f",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "160px",
                                },
                              ],
                              position: "absolute",
                              width: "300px",
                              height: "500px",
                            },
                            // เพิ่ม bubble อื่น ๆ ที่ต้องการ
                          ],
                          paddingAll: "0px",
                        },
                      },
                    ],
                  },
                },
              ],
            };
          }

          try {
            console.log("Sending message:", messageData); // ตรวจสอบข้อมูลที่กำลังจะส่ง
            await axios.post(
              "https://api.line.me/v2/bot/message/push",
              messageData,
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${LINE_ACCESS_TOKEN}`,
                },
              }
            );
          } catch (error) {
            console.error(
              "Error sending message:",
              error.response ? error.response.data : error.message
            );
          }
        }
      }
    }
  }

  res.sendStatus(200);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
