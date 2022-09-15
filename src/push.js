var push = require('web-push')

let vapIdKeys = {
  publicKey: 'BKo4RGC0FmI2xzrIQaJYhp_TQw-v8p7mDAAJfuoJt7B8QO-L4v9-e6-aI-gYNFfAG7jhlJvqRNRlT6hT8elkjB8',
  privateKey: '7hNhCLvZ_vWrQ0E8vbFYfdiYITlQhJ_fEZRAcqWfQm8'
}

push.setVapidDetails('mailto:test@test.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

const subscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fngzVc7Kvxk:APA91bFfB3WRAlhSGbP6lNPxtpF2gIxWJDbug4QRdpi1wLO--8iOHo2M4DGJrGUKLjF0oHSnca6yA-Y_vDkv_NbBK4AUtiIGm_kjnLOFhfBafZm4BUVUh6RM7QfdPgB7bkPKQOUHhOZg","expirationTime":null,"keys":{"p256dh":"BN5SejsTjc52j0GjU6j58Buc_bcDxvDjeTIZt0MZ2qE7wvz63HfvMmDdM1kOePzZrg4UJ87nPFVDdzC6Q3tXkJ0","auth":"7mID_vUXxKrNH6-aJpxC8g"}}
push.sendNotification(subscription, 'test message')