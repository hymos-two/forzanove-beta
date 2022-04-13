import { useRouter } from 'next/router'

export default function Events () {
  const router = useRouter()
  const { slug } = router.query

  console.log(router)

  return (
    <div>
      <h1 className="text-2xl text-white">{slug}</h1>
    </div>
  )
}