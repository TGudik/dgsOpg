/* gemmer apiUrl som variabel, så det kun skal opdateres et sted */
const apiUrl = "http://localhost:3042"

/* Fetch funktioner som henter alle objekter fra respektive ruter */
export const categoriesLoader = async () => {
    const res = await fetch(`${apiUrl}/categories`)
    if (!res.ok) throw new Response("Fejl ved hentning", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}

export const dishesLoader = async () => {
    const res = await fetch(`${apiUrl}/dishes`)
    if (!res.ok) throw new Response("Fejl ved hentning", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}

export const homeLoader = async () => {
    const [categories, dishes] = await Promise.all([
        categoriesLoader(),
        dishesLoader()
    ])

    return{
        categories,
        dishes
    }
}

export const employeesLoader = async () => {
    const res = await fetch(`${apiUrl}/employees`)
    if (!res.ok) throw new Response("Fejl ved hentning", {status: res.status})
    const preData = await res.json()
    const data = preData.data
    return data
}

export const fetchDishById = async ({params}) => {
    const res = await fetch(`${apiUrl}/dish/${params.id}`)
    if (!res.ok) throw new Response("Retten er ikke blevet fundet", {status: 404})
    const preData = await res.json()
    const data = preData.data
    return data
}