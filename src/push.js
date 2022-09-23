var push = require('web-push')

let vapIdKeys = {
  publicKey: 'BKo4RGC0FmI2xzrIQaJYhp_TQw-v8p7mDAAJfuoJt7B8QO-L4v9-e6-aI-gYNFfAG7jhlJvqRNRlT6hT8elkjB8',
  privateKey: '7hNhCLvZ_vWrQ0E8vbFYfdiYITlQhJ_fEZRAcqWfQm8'
}

push.setVapidDetails('mailto:test@test.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

const subscription =  {"endpoint":"https://fcm.googleapis.com/fcm/send/fyqPm_wOlm0:APA91bEK-aCGe_5WVcc_ajlQnckImsJtY77gS2MLXbUbdYCSe8tA4sI8kXhG1jv2MqGW-CaQ-8zYa6MzqV3_giA8-lCfReSzwDHO1sLhF7uTGZOWMYpPHqWJoyw2vEiFbOorp_ocN6a2","expirationTime":null,"keys":{"p256dh":"BH8If0GAELg9Kh9Q3dr-zrKeuBJzSsM_-SIs7AWZmbOi_vxS_7zj70QI99s3UwPqdNCqgtHLG0eiq7qI00MoeUM","auth":"iZg5TCSFJIxODP6i0y4rqA"}}
push.sendNotification(subscription, 'test message')