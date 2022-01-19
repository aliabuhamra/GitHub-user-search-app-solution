export class Github {
    constructor(baseURL) {
        this.baseURL = baseURL
        this.repos_count = 5
        this.repos_sort = 'created : asc'
    }

    async get(user) {
        const profileResponse = await fetch(this.baseURL + user)
        const reposResponse = await fetch(`${this.baseURL}${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`)
        const profile = await profileResponse.json()
        const repos = await reposResponse.json()
        return {
            profile,
            repos
        }
    }
}
