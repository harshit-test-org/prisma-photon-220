import Photon from '@generated/photon'
const photon = new Photon()

async function main() {
  const user1 = await photon.addresses.create({
    data: {
      userAddress: {
        create: {},
      },
    },
  })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
