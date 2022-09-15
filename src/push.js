var push = require('web-push')

let vapIdKeys = {
  publicKey: 'BKo4RGC0FmI2xzrIQaJYhp_TQw-v8p7mDAAJfuoJt7B8QO-L4v9-e6-aI-gYNFfAG7jhlJvqRNRlT6hT8elkjB8',
  privateKey: '7hNhCLvZ_vWrQ0E8vbFYfdiYITlQhJ_fEZRAcqWfQm8'
}

push.setVapidDetails('mailto:test@test.com', vapIdKeys.publicKey, vapIdKeys.privateKey)

const subscription = {};
push.sendNotification(subscription, 'test message')