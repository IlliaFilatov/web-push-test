var push = require('web-push')

let vapIdKeys = {
  publicKey: 'BKo4RGC0FmI2xzrIQaJYhp_TQw-v8p7mDAAJfuoJt7B8QO-L4v9-e6-aI-gYNFfAG7jhlJvqRNRlT6hT8elkjB8',
  privateKey: '7hNhCLvZ_vWrQ0E8vbFYfdiYITlQhJ_fEZRAcqWfQm8'
}

push.setVapidDetails('mailto:test@test.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

const subscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fAB60y6iYNk:APA91bFl5o5izjeeC8sZIfNuQlOEqMo_DDqbhJlUCj21dprG8I7nDGSoSugqaei52JHDwOV2DM73tM_tn5vaazr7X3VTLfprqijHOQom5A0NKmjMDWKr4pKpuugApc3oIXTi0mJzR8NG","expirationTime":null,"keys":{"p256dh":"BMpL4W46AZKLNLTJ2up-ft1v3oV1NKDm6_yXbC8UlSRQUqkD8HpY1xkU3k8tTATdVSNsdUJ0yo5Kn0SvLFGeH_o","auth":"SW55dD8cVFvIYjt57EBkfQ"}};
push.sendNotification(subscription, 'test message')