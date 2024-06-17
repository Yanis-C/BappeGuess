const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
};

const competitionsIds = ["GB1", "L1", "ES1", "IT1", "FR1"]

export const getClubsByComp = async(id) => {

    if (!competitionsIds.includes(id)) {
        alert("Invalid competition ID");
        return;
    }

    try {
        const url = `https://transfermarkt-api-sigma.vercel.app/competitions/${id}/clubs`;
    	const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        return result.clubs;
    } catch(e) {
        alert(e);
    }

}