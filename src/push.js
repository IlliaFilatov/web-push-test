var push = require('web-push')

let vapIdKeys = {
  publicKey: 'BKo4RGC0FmI2xzrIQaJYhp_TQw-v8p7mDAAJfuoJt7B8QO-L4v9-e6-aI-gYNFfAG7jhlJvqRNRlT6hT8elkjB8',
  privateKey: '7hNhCLvZ_vWrQ0E8vbFYfdiYITlQhJ_fEZRAcqWfQm8'
}

push.setVapidDetails('mailto:test@test.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

const subscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/fWFyKM23zdo:APA91bFmFuJO8IWNSo_xrG7hOwFfWwq-eUSsppMK2m6QHmVWPWWi_gq-WlxFShIrmxBmboP8AZlWWP3U9J1mLBqGIYeIjFvEmF8mZx3fiDygzXJ4vSJ_dDyPXg24Y2TVuJKW2sJsGu8F","expirationTime":null,"keys":{"p256dh":"BHRADBXQsfZefKq--FXyFiSOwq-VSI2lMjP2K7zS4KOnr-9O9DbI8l_o56OMeotwCCxJFQZrrB_7PLP_wZgfyjY","auth":"mHULzxIg9f-WrCK8KhnV1w"}}
push.sendNotification(subscription, 'test message')