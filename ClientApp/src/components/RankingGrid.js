// these parameters are the properties of the component that will be passed of as HTML attributes
const RankingGrid = ({ items, imageArray }) => {
  // This is a really bad way to program this, I'll have to improve it later
  const rankingGrid = [];
  const cellCollectionTop = [];
  const cellCollectionHalfTop = [];
  const cellCollectionHalfBottom = [];
  const cellCollectionBottom = [];

  function createCellsForRow(rowNumber) {
    let rankingNumber = 0;
    let currentCollection = [];
    let label = "";
    const cellNumber = 5;

    for (let i = 1; i <= cellNumber; i++) {
      rankingNumber = calculateRankingNumber(i, cellNumber, rowNumber);
    }

    switch (rowNumber) {
      case 1:
        currentCollection = cellCollectionTop;
        label = "Top Tier";
        break;
      case 2:
        currentCollection = cellCollectionHalfTop;
        label = "Half Top Tier";
        break;
      case 3:
        currentCollection = cellCollectionHalfBottom;
        label = "Half Bottom Tier";
        break;
      case 4:
        currentCollection = cellCollectionBottom;
        label = "Bottom Tier";
        break;
      default:
        break;
    }

    pushCellMarkupToArray(currentCollection, rankingNumber, label);
  }

  function calculateRankingNumber(currentCell, cellNumber, rowNumber) {
    return currentCell === 1
      ? 0
      : cellNumber * (rowNumber - 1) + currentCell - rowNumber;
  }

  function populateRows() {
    const maxRows = 4;
    for (let row = 1; row <= maxRows; row++) {
      createCellsForRow(row);
    }
  }

  function createRowsForGrid() {
    rankingGrid.push(
      <div className="rank-row top-tier">{cellCollectionTop}</div>
    );
    rankingGrid.push(
      <div className="rank-row half-top-tier">{cellCollectionHalfTop}</div>
    );
    rankingGrid.push(
      <div className="rank-row half-bottom-tier">
        {cellCollectionHalfBottom}
      </div>
    );
    rankingGrid.push(
      <div className="rank-row bottom-tier">{cellCollectionBottom}</div>
    );

    return rankingGrid;
  }

  function createRankingGrid() {
    populateRows();
    return createRowsForGrid();
  }

  return <div className="rankings">{createRankingGrid()}</div>;
};

export default RankingGrid;
