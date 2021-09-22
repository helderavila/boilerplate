type Props = {
  title: string;
}

const blo = 'blo'

export default function Home({ title = "React" }: Props) {
  return (
    <h1>{title}</h1>
  )
}
