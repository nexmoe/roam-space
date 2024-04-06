export default function () {
    const { $client } = useNuxtApp()
    return $client.config.get.query()
}
