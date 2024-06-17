const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
};

export const getPlayersByClub = async(id_club) => {

    try {
        const url = `https://transfermarkt-api-sigma.vercel.app/clubs/${id_club}/players`;
    	const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        return result.players;
    } catch(e) {
        alert(e);
    }

}