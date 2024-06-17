import { useEffect, useState } from 'react'
import InfoHide from './InfoHide.jsx'

function PlayerCard({ player, onDecrementScore, showAll}) {

  const [playerInfos, setPlayerInfos] = useState([]);
  const [imgBlur, setimgBlur] = useState(1);

  useEffect(() => {

    if (player != null) {
      let playerI = formatPlayerInfos(player, showAll);
      setPlayerInfos(playerI);
      setimgBlur(showAll ? 0 : 1)
    }

  }, [player, showAll]);


  if (player == null || !player.id) {
    return null;
  }

  function showInfo(col, key) {
    let col_index = playerInfos[col].findIndex(ele => ele.key === key);

    if (playerInfos[col][col_index]["hidden"] == 1) {
      //Array copy and update
      const updatedPlayerInfos = playerInfos.map((infoCol, index) => {
        //depth 0
        if (index === col) {
          return infoCol.map(item => {
            //depth 1
            if (item.key === key) {
              return { ...item, hidden: 0 };
            } else {
              return item;
            }
          });
        } else {
          return infoCol;
        }
      });

      onDecrementScore(1)
      setPlayerInfos(updatedPlayerInfos);
    }
  }

  function unBlur() {
    if (imgBlur == 1) {
      onDecrementScore(3)
      setimgBlur(0);
    }
  }


  let infosItems = playerInfos.map((infoCol, index) => (
    <div key={index} className="flex flex-col w-1/2 items-center">
      {infoCol.map((info) => 
        <InfoHide 
          key={info.key} 
          value={info.value} 
          lib_value={info.lib_value}
          hidden={info.hidden} 
          onShowInfo={() => showInfo(index, info.key)}
          >
        </InfoHide>)}
    </div>
  ));

  return (
    <div className="flex flex-col p-4 my-auto w-full justify-evenly">
      <img src={player.imageURL} className={'mx-auto rounded-lg w-1/5 my-2 ' + (showAll ? "" : (imgBlur == 1 ? "blur-md cursor-pointer" : "blur-sm"))} onClick={unBlur} />
      <div className="flex flex-row">
        {infosItems}
      </div>
    </div>
  );

}

function formatPlayerInfos(player, showAll = false) {
  let infos = [
    [
      {
        key: 10,
        lib_value: "Nation",
        value: player.citizenship[0],
        hidden: showAll ? 0 : 1
      },
      {
        key: 2,
        lib_value: "Age",
        value: player.age,
        hidden: showAll ? 0 : 1
      },
      {
        key: 3,
        lib_value: "Position",
        value: player.position.main,
        hidden: showAll ? 0 : 1
      },
      {
        key: 4,
        lib_value: "Foot",
        value: player.foot,
        hidden: showAll ? 0 : 1
      }
    ],
    [
      {
        key: 5,
        lib_value: "Club",
        value: player.isRetired ? "Retired" : player.club.name,
        hidden: showAll ? 0 : 1
      },
      {
        key: 6,
        lib_value: "Shirt number",
        value: player.shirtNumber,
        hidden: showAll ? 0 : 1
      },
      {
        key: 7,
        lib_value: "Market value",
        value: player.isRetired ? "Retired" : player.marketValue,
        hidden: showAll ? 0 : 1
      },
      {
        key: 8,
        lib_value: "Height",
        value: player.height,
        hidden: showAll ? 0 : 1
      },
    ]
  ];

  return infos;
}


export default PlayerCard;