const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
};

export const getPlayerInfo = async(id_player) => {

    try {
        const url = `https://transfermarkt-api-sigma.vercel.app/players/${id_player}/profile`;
    	const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        return result;
    } catch(e) {
        alert(e);
    }

}

export const getMostValuablePlayers = async(page) => {

    try {
        const url = "https://transfermarkt-api-sigma.vercel.app/players/most_valuable?page_number=" + page;
    	const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        return result.results;
    } catch(e) {
        alert(e);
    }

}

export const getRecordValuePlayers = async(page) => {

    try {
        const url = "https://transfermarkt-api-sigma.vercel.app/players/record_values?page_number=" + page;
    	const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        return result.results;
    } catch(e) {
        alert(e);
    }

}