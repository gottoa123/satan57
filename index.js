const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(express.json()); // ใช้การแปลง JSON ในตัวของ Express
app.use(bodyParser.json());

const LINE_ACCESS_TOKEN = process.env.satan47_LINE_ACCESS_TOKEN;

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
                        type: "bubble",
                        body: {
                          type: "box",
                          layout: "vertical",
                          contents: [
                            {
                              type: "image",
                              url: "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                              size: "full",
                              aspectRatio: "1:1.6667",
                              gravity: "top",
                              aspectMode: "fit",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "text",
                                  text: "ตั้งแต่เวลา 00:00 - 02:00",
                                  color: "#ffffff",
                                  size: "xl",
                                  weight: "bold",
                                  align: "center",
                                },
                              ],
                              offsetTop: "320px",
                              width: "100%",
                              backgroundColor: "#00000000",
                              position: "absolute",
                            },
                            {
                              type: "box",
                              layout: "vertical",
                              contents: [
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                  animated: true,
                                  size: "full",
                                  aspectMode: "fit",
                                  offsetTop: "110px",
                                },
                                {
                                  type: "image",
                                  url: "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                  size: "60px",
                                  offsetTop: "130px",
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
                              url: "https://lh3.googleusercontent.com/d/1E37l5PZMDH3SxbxsnCNu5ZVH3slt-z9A",
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
                              url: "https://lh3.googleusercontent.com/d/1nBLcjkEqd72biyccEdmjI-XXcU4xxUAb",
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
                              url: "https://lh3.googleusercontent.com/d/1MMcDNrilsWe5IwHxzbIhc6cVx0InkXUD",
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
                              url: "https://lh3.googleusercontent.com/d/18kCjJKBqXYyJOLy1qme0eWdeK9uOiNh1",
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
                                type: "bubble",
                                body: {
                                  type: "box",
                                  layout: "vertical",
                                  contents: [
                                    {
                                      type: "image",
                                      url: "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                                      size: "full",
                                      aspectRatio: "1:1.6667",
                                      gravity: "top",
                                      aspectMode: "fit",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "text",
                                          text: "ตั้งแต่เวลา 02:00 - 04:00",
                                          color: "#ffffff",
                                          size: "xl",
                                          weight: "bold",
                                          align: "center",
                                        },
                                      ],
                                      offsetTop: "320px",
                                      width: "100%",
                                      backgroundColor: "#00000000",
                                      position: "absolute",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                          animated: true,
                                          size: "full",
                                          aspectMode: "fit",
                                          offsetTop: "110px",
                                        },
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                          size: "60px",
                                          offsetTop: "130px",
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
                                      url: "https://lh3.googleusercontent.com/d/1BTueG90k_VcippIhf0SSPLykob6uwP5T",
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
                                      url: "https://lh3.googleusercontent.com/d/1Xxb6pS8sCH3HLbdyBumJ3prLFkxmKk4o",
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
                                      url: "https://lh3.googleusercontent.com/d/1FETXd6J3dXsk_-poRCeEO66lq8tQS5zk",
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
                                      url: "https://lh3.googleusercontent.com/d/1rB7mrcXkX2ahlJ1rcR56-esRMGBsDFDp",
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
                                type: "bubble",
                                body: {
                                  type: "box",
                                  layout: "vertical",
                                  contents: [
                                    {
                                      type: "image",
                                      url: "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                                      size: "full",
                                      aspectRatio: "1:1.6667",
                                      gravity: "top",
                                      aspectMode: "fit",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "text",
                                          text: "ตั้งแต่เวลา 04:00 - 06:00",
                                          color: "#ffffff",
                                          size: "xl",
                                          weight: "bold",
                                          align: "center",
                                        },
                                      ],
                                      offsetTop: "320px",
                                      width: "100%",
                                      backgroundColor: "#00000000",
                                      position: "absolute",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                          animated: true,
                                          size: "full",
                                          aspectMode: "fit",
                                          offsetTop: "110px",
                                        },
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                          size: "60px",
                                          offsetTop: "130px",
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
                                      url: "https://lh3.googleusercontent.com/d/1E37l5PZMDH3SxbxsnCNu5ZVH3slt-z9A",
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
                                      url: "https://lh3.googleusercontent.com/d/1QQbKq0R22ai2YqXihE8KLh4sArzgflVo",
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
                                      url: "https://lh3.googleusercontent.com/d/1_tCo3XuIYR5nm1uH_JLr7vTq-ubpfG0r",
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
                                      url: "https://lh3.googleusercontent.com/d/19TkRDdmTaz4cyXlAaRVd8xHhjU09Cuik",
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
                                      url: "https://lh3.googleusercontent.com/d/1AlUBa9MDYzCWOYi1XNh_ryKzm3bCqFQ6",
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
                                type: "bubble",
                                body: {
                                  type: "box",
                                  layout: "vertical",
                                  contents: [
                                    {
                                      type: "image",
                                      url: "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                                      size: "full",
                                      aspectRatio: "1:1.6667",
                                      gravity: "top",
                                      aspectMode: "fit",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "text",
                                          text: "ตั้งแต่เวลา 06:00 - 08:00",
                                          color: "#ffffff",
                                          size: "xl",
                                          weight: "bold",
                                          align: "center",
                                        },
                                      ],
                                      offsetTop: "320px",
                                      width: "100%",
                                      backgroundColor: "#00000000",
                                      position: "absolute",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                          animated: true,
                                          size: "full",
                                          aspectMode: "fit",
                                          offsetTop: "110px",
                                        },
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                          size: "60px",
                                          offsetTop: "130px",
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
                                      url: "https://lh3.googleusercontent.com/d/1a7-P9kCWB1i_LagmFrA7mDvkMwgvO6jI",
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
                                      url: "https://lh3.googleusercontent.com/d/1TPIKGQS5Fyd0zKvMvXfIT-oBWhl7CnLl",
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
                                      url: "https://lh3.googleusercontent.com/d/1urNJ5mFGh-RO7zlQN0r-24UjOtVUe9yd",
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
                                      url: "https://lh3.googleusercontent.com/d/12WOaCtaJAwU4vdRuSXoh9c05ikWtuOhD",
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
                                type: "bubble",
                                body: {
                                  type: "box",
                                  layout: "vertical",
                                  contents: [
                                    {
                                      type: "image",
                                      url: "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                                      size: "full",
                                      aspectRatio: "1:1.6667",
                                      gravity: "top",
                                      aspectMode: "fit",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "text",
                                          text: "ตั้งแต่เวลา 08:00 - 10:00",
                                          color: "#ffffff",
                                          size: "xl",
                                          weight: "bold",
                                          align: "center",
                                        },
                                      ],
                                      offsetTop: "320px",
                                      width: "100%",
                                      backgroundColor: "#00000000",
                                      position: "absolute",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                          animated: true,
                                          size: "full",
                                          aspectMode: "fit",
                                          offsetTop: "110px",
                                        },
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                          size: "60px",
                                          offsetTop: "130px",
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
                                      url: "https://lh3.googleusercontent.com/d/187lYu6_EpAxB374BiZQfvq91LGj6vv2N",
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
                                      url: "https://lh3.googleusercontent.com/d/1BfdDBiV-6qfEIRvpoYpK7u9wMht62c6y",
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
                                      url: "https://lh3.googleusercontent.com/d/19TkRDdmTaz4cyXlAaRVd8xHhjU09Cuik",
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
                                      url: "https://lh3.googleusercontent.com/d/1oK3MCn5Yhm6eq3u8hPV1oLROVsnEyKCS",
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
                                type: "bubble",
                                body: {
                                  type: "box",
                                  layout: "vertical",
                                  contents: [
                                    {
                                      type: "image",
                                      url: "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                                      size: "full",
                                      aspectRatio: "1:1.6667",
                                      gravity: "top",
                                      aspectMode: "fit",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "text",
                                          text: "ตั้งแต่เวลา 10:00 - 12:00",
                                          color: "#ffffff",
                                          size: "xl",
                                          weight: "bold",
                                          align: "center",
                                        },
                                      ],
                                      offsetTop: "320px",
                                      width: "100%",
                                      backgroundColor: "#00000000",
                                      position: "absolute",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                          animated: true,
                                          size: "full",
                                          aspectMode: "fit",
                                          offsetTop: "110px",
                                        },
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                          size: "60px",
                                          offsetTop: "130px",
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
                                      url: "https://lh3.googleusercontent.com/d/1q3h3KOs8v_Rx4k7IlX4WLtXZWQilv_iy",
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
                                      url: "https://lh3.googleusercontent.com/d/1KhTIIEt1sNaC1BV4Uy6Whuy3fyVGc75o",
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
                                      url: "https://lh3.googleusercontent.com/d/1QEQa6D0SNkGlEq1HJqY_zBDvEb6c5PI7",
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
                                      url: "https://lh3.googleusercontent.com/d/18kCjJKBqXYyJOLy1qme0eWdeK9uOiNh1",
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
                                type: "bubble",
                                body: {
                                  type: "box",
                                  layout: "vertical",
                                  contents: [
                                    {
                                      type: "image",
                                      url: "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                                      size: "full",
                                      aspectRatio: "1:1.6667",
                                      gravity: "top",
                                      aspectMode: "fit",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "text",
                                          text: "ตั้งแต่เวลา 12:00 - 14:00",
                                          color: "#ffffff",
                                          size: "xl",
                                          weight: "bold",
                                          align: "center",
                                        },
                                      ],
                                      offsetTop: "320px",
                                      width: "100%",
                                      backgroundColor: "#00000000",
                                      position: "absolute",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                          animated: true,
                                          size: "full",
                                          aspectMode: "fit",
                                          offsetTop: "110px",
                                        },
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                          size: "60px",
                                          offsetTop: "130px",
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
                                      url: "https://lh3.googleusercontent.com/d/1BTueG90k_VcippIhf0SSPLykob6uwP5T",
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
                                      url: "https://lh3.googleusercontent.com/d/1a7MtDx57JQcwIrQBDK5B6fIb9t5n7V_q",
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
                                      url: "https://lh3.googleusercontent.com/d/159G0XFwUUKeQgkov4SGW2Ef4dbiJJNZC",
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
                                      url: "https://lh3.googleusercontent.com/d/1T-A8mR808YrTK84QprZW1wzUEFfBd_Op",
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
                                type: "bubble",
                                body: {
                                  type: "box",
                                  layout: "vertical",
                                  contents: [
                                    {
                                      type: "image",
                                      url: "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                                      size: "full",
                                      aspectRatio: "1:1.6667",
                                      gravity: "top",
                                      aspectMode: "fit",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "text",
                                          text: "ตั้งแต่เวลา 14:00 - 16:00",
                                          color: "#ffffff",
                                          size: "xl",
                                          weight: "bold",
                                          align: "center",
                                        },
                                      ],
                                      offsetTop: "320px",
                                      width: "100%",
                                      backgroundColor: "#00000000",
                                      position: "absolute",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                          animated: true,
                                          size: "full",
                                          aspectMode: "fit",
                                          offsetTop: "110px",
                                        },
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                          size: "60px",
                                          offsetTop: "130px",
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
                                      url: "https://lh3.googleusercontent.com/d/1JBLO6uZ_lP4twph5IdScsgqR4reOMuTO",
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
                                      url: "https://lh3.googleusercontent.com/d/11iq3jDjj707G3vnAeVieoVPWiMTEqNS9",
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
                                      url: "https://lh3.googleusercontent.com/d/1ilZ-qDZ_gIaYAHRdrX78TDbzit2FXZez",
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
                                      url: "https://lh3.googleusercontent.com/d/1CXL6hxNiQ3_UoDX2K7OwP93hVsrrgG9C",
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
                                type: "bubble",
                                body: {
                                  type: "box",
                                  layout: "vertical",
                                  contents: [
                                    {
                                      type: "image",
                                      url: "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                                      size: "full",
                                      aspectRatio: "1:1.6667",
                                      gravity: "top",
                                      aspectMode: "fit",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "text",
                                          text: "ตั้งแต่เวลา 16:00 - 18:00",
                                          color: "#ffffff",
                                          size: "xl",
                                          weight: "bold",
                                          align: "center",
                                        },
                                      ],
                                      offsetTop: "320px",
                                      width: "100%",
                                      backgroundColor: "#00000000",
                                      position: "absolute",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                          animated: true,
                                          size: "full",
                                          aspectMode: "fit",
                                          offsetTop: "110px",
                                        },
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                          size: "60px",
                                          offsetTop: "130px",
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
                                      url: "https://lh3.googleusercontent.com/d/19crb6NsZZM0CaaUib8iVymWAKSSzYw9L",
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
                                      url: "https://lh3.googleusercontent.com/d/1nBLcjkEqd72biyccEdmjI-XXcU4xxUAb",
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
                                      url: "https://lh3.googleusercontent.com/d/1MMcDNrilsWe5IwHxzbIhc6cVx0InkXUD",
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
                                      url: "https://lh3.googleusercontent.com/d/1KnD1x7CnQ783L5SBWG8_71SLcThb-dcI",
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
                                type: "bubble",
                                body: {
                                  type: "box",
                                  layout: "vertical",
                                  contents: [
                                    {
                                      type: "image",
                                      url: "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                                      size: "full",
                                      aspectRatio: "1:1.6667",
                                      gravity: "top",
                                      aspectMode: "fit",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "text",
                                          text: "ตั้งแต่เวลา 18:00 - 20:00",
                                          color: "#ffffff",
                                          size: "xl",
                                          weight: "bold",
                                          align: "center",
                                        },
                                      ],
                                      offsetTop: "320px",
                                      width: "100%",
                                      backgroundColor: "#00000000",
                                      position: "absolute",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                          animated: true,
                                          size: "full",
                                          aspectMode: "fit",
                                          offsetTop: "110px",
                                        },
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                          size: "60px",
                                          offsetTop: "130px",
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
                                      url: "https://lh3.googleusercontent.com/d/1QQbKq0R22ai2YqXihE8KLh4sArzgflVo",
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
                                      url: "https://lh3.googleusercontent.com/d/1Xxb6pS8sCH3HLbdyBumJ3prLFkxmKk4o",
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
                                      url: "https://lh3.googleusercontent.com/d/1FETXd6J3dXsk_-poRCeEO66lq8tQS5zk",
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
                                      url: "https://lh3.googleusercontent.com/d/1_unGSlPY0mhKai2JnXqVU5AMJ-oIBn7f",
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
                                                  type: "bubble",
                                                  body: {
                                                    type: "box",
                                                    layout: "vertical",
                                                    contents: [
                                                      {
                                                        type: "image",
                                                        url: "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                                                        size: "full",
                                                        aspectRatio: "1:1.6667",
                                                        gravity: "top",
                                                        aspectMode: "fit",
                                                      },
                                                      {
                                                        type: "box",
                                                        layout: "vertical",
                                                        contents: [
                                                          {
                                                            type: "text",
                                                            text: "ตั้งแต่เวลา 20:00 - 22:00",
                                                            color: "#ffffff",
                                                            size: "xl",
                                                            weight: "bold",
                                                            align: "center",
                                                          },
                                                        ],
                                                        offsetTop: "320px",
                                                        width: "100%",
                                                        backgroundColor: "#00000000",
                                                        position: "absolute",
                                                      },
                                                      {
                                                        type: "box",
                                                        layout: "vertical",
                                                        contents: [
                                                          {
                                                            type: "image",
                                                            url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                                            animated: true,
                                                            size: "full",
                                                            aspectMode: "fit",
                                                            offsetTop: "110px",
                                                          },
                                                          {
                                                            type: "image",
                                                            url: "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                                            size: "60px",
                                                            offsetTop: "130px",
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
                                                        url: "https://lh3.googleusercontent.com/d/1QBB1SgtCk0tI89uW3nP4OiAuvx8TvYLG",
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
                                                        url: "https://lh3.googleusercontent.com/d/1_tCo3XuIYR5nm1uH_JLr7vTq-ubpfG0r",
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
                                                        url: "https://lh3.googleusercontent.com/d/1urNJ5mFGh-RO7zlQN0r-24UjOtVUe9yd",
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
                                                        url: "https://lh3.googleusercontent.com/d/1MQRequUYQBZDTlo2tQvKPSUGIe_jlc5J",
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
                                                    ],
                                                    paddingAll: "0px",
                                                  },
                                                },
                                              ],
                                            },
                                          },
                                        ],
                                      };
                  
                } else if (currentHour >= 22 && currentHour < 24) {
                    // เวลาตั้งแต่ 22:00 ถึง 24:00
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
                                type: "bubble",
                                body: {
                                  type: "box",
                                  layout: "vertical",
                                  contents: [
                                    {
                                      type: "image",
                                      url: "https://lh3.googleusercontent.com/d/1-9-FeTJW81kjKyeNYetlEGulHpj4u10G",
                                      size: "full",
                                      aspectRatio: "1:1.6667",
                                      gravity: "top",
                                      aspectMode: "fit",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "text",
                                          text: "ตั้งแต่เวลา 22:00 - 23:59",
                                          color: "#ffffff",
                                          size: "xl",
                                          weight: "bold",
                                          align: "center",
                                        },
                                      ],
                                      offsetTop: "320px",
                                      width: "100%",
                                      backgroundColor: "#00000000",
                                      position: "absolute",
                                    },
                                    {
                                      type: "box",
                                      layout: "vertical",
                                      contents: [
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1re9t83fHfyXgkZZWsDbiBBhHL4Q4OT3i",
                                          animated: true,
                                          size: "full",
                                          aspectMode: "fit",
                                          offsetTop: "110px",
                                        },
                                        {
                                          type: "image",
                                          url: "https://lh3.googleusercontent.com/d/1C7hcqZWrl4N7CR9HX4R-k72Zbv1wGhZc",
                                          size: "60px",
                                          offsetTop: "130px",
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
                                      url: "https://lh3.googleusercontent.com/d/1a7-P9kCWB1i_LagmFrA7mDvkMwgvO6jI",
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
                                      url: "https://lh3.googleusercontent.com/d/1TPIKGQS5Fyd0zKvMvXfIT-oBWhl7CnLl",
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
                                      url: "https://lh3.googleusercontent.com/d/1uoB4zk1bNY-nSABFWEUGh2LWIqlinvkx",
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
                                      url: "https://lh3.googleusercontent.com/d/1UG8GM3fgEjaYnWZwRmoX20vz0YkG4AYZ",
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
