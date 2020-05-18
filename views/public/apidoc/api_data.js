define({ "api": [
  {
    "type": "post",
    "url": "/api/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n \"data\": {\n     \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mbyI6eyJjcmVhdGVfdGltZSI6IjIwMjAtMDUtMTEgMjI6MDQ6MjIiLCJ1c2VyX2lkIjo0NCwibmlja19uYW1lIjoi546L5biM5bmzIiwicGFzc3dvcmQiOiIxZDdmMzNmODIxNmVjYTEyIiwiZW1haWwiOiIzOTU2MDQxOTJAcXEuY29tIiwicGhvbmUiOiIxMTAiLCJzdGF0ZSI6MSwiYXZhdGFyIjoicHVibGljL3VwbG9hZHMvY3NkZV8xNTg5MTgzMjM4MDAwLmpwZWciLCJ1cGRhdGVfaWQiOjQ0fSwiYWRtaW4iOnRydWUsImlhdCI6MTU4OTc5OTIzNX0.lJdD_C_pbpcZk-oTveyuiOOwAropwuJiXZusWbmN2S8\"\n  },\n \"msg\": \"成功\",\n \"code\": 200\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:10086/api/login"
      }
    ],
    "version": "1.0.0",
    "filename": "router/api/index.js",
    "groupTitle": "User"
  }
] });
