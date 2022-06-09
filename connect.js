const { MongoClient } = require('mongodb')

module.exports = {
  selectedDb: {},
  async connect() {
    try {
      const client = await MongoClient.connect(
        'mongodb+srv://hallbooking:hallbooking123@cluster0.sn7ki.mongodb.net/?retryWrites=true&w=majority',
      )
      this.selectedDb = client.db('HallBooking')
    } catch (error) {
      console.log(error)
    }
  },
}
