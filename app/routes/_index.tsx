import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export const loader = ({ params, request }: LoaderFunctionArgs) => {
  console.debug({params}) // Remix params bring an empty object

  // got to use the `request`
  const url = new URL(request.url)
  const searchParams = new URLSearchParams(url.search)
  const features = searchParams.getAll("features")
  console.debug(features)

  return features
}

export default function Index() {
  return (
    <form method="get">
      <fieldset>
        <legend>Choose your monster&apos;s features:</legend>

        <div>
          <label htmlFor="scales">
            <input type="checkbox" id="scales" name="features" value="scales" />
            &nbsp;Scales
          </label>
        </div>

        <div>
          <label htmlFor="horns">
            <input type="checkbox" id="horns" name="features" value="horns" />
            &nbsp;Horns
          </label>
        </div>

        <div>
          <label htmlFor="fangs">
            <input type="checkbox" id="fangs" name="features" value="fangs" />
            &nbsp;Fangs
          </label>
        </div>
      </fieldset>

      <input type="submit" value="Send" />
    </form>
  )
}
