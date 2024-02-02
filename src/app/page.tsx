import { OwnerRepo } from '@/components/OwnerRepo'

interface DataProps {
  id: number
  name: string
  full_name: string
  owner: {
    login: string
    id: number
    avatar_url: string
    url: string
  }
}

async function delayFetch(url: string, delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay))
  const response = await fetch(url, { cache: 'no-store' })
  return response.json()
}

// getData original sem delay.

// async function getData() {
//     const response = await fetch('https://api.github.com/users/devfraga/repos')
//     return response.json()
// }

// getData com delay Teste lentidão API
async function getData() {
  const data = await delayFetch(
    'https://api.github.com/users/devfraga/repos',
    0,
  )
  return data
}

export default async function Home() {
  const data: DataProps[] = await getData()

  return (
    <main>
      <h1>Home</h1>
      <span>Seja Bem Vindo</span>
      <h3>Meus Repositorios</h3>
      {data.map((item) => (
        <div key={item.id}>
          <strong>Repositorio:</strong> <a>{item.name}</a>
          <br />
          <OwnerRepo
            avatar_url={item.owner.avatar_url}
            name={item.owner.login}
          />
          <br />
        </div>
      ))}
    </main>
  )
}
