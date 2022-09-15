var push = require('web-push')

let vapIdKeys = {
  publicKey: 'BKo4RGC0FmI2xzrIQaJYhp_TQw-v8p7mDAAJfuoJt7B8QO-L4v9-e6-aI-gYNFfAG7jhlJvqRNRlT6hT8elkjB8',
  privateKey: '7hNhCLvZ_vWrQ0E8vbFYfdiYITlQhJ_fEZRAcqWfQm8'
}

push.setVapidDetails('mailto:test@test.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

const subscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fUu5DFJRo44:APA91bE_cPjNEvQ5afkH5VMW_6pjXW1YpIaL7dOBYPy87RmjqJCbJ4cI6DHjQxwAhey6092su91wRKdQwurJW5FG-zw75c_bfOszTs_Bmo_9Jz-k50h4YcUEEd9jJ7AnjgqvXxUBGiKS","expirationTime":null,"keys":{"p256dh":"BC3wNsLlsQWw-oeE9G8lGxzVwPtqrrsyF94dWbwLvEKgamDF_aUVLoksqMHJ_osF8bc4LyrMgmLRmzLV1Z_2YyM","auth":"vtSnpvW4z9vxY2aU4FNR5g"}}
push.sendNotification(subscription, 'test message')