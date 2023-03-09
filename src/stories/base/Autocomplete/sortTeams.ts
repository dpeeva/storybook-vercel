import { Team } from "./types"

export const sortTeams = (teams: Team[], searchText?: string): Team[] => {
    if (!searchText) {
        return teams
    }

    const phrase = searchText.toUpperCase()
    const exactMatch: Team[] = []
    const allMatches: Team[] = []

    for (const team of teams) {
        const index = team.name.toUpperCase().trim().indexOf(phrase)
        if (index !== -1) {
            if (index === 0) {
                exactMatch.push(team)
            } else {
                allMatches.push(team)
            }
        }
    }

    exactMatch.sort(
        (t1: Team, t2: Team) => t1.name.localeCompare(t2.name)
    )
    allMatches.sort(
        (t1: Team, t2: Team) => t1.name.localeCompare(t2.name)
    )

    return [
        ...exactMatch,
        ...allMatches
    ]
}