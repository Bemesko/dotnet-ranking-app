// these parameters are the properties of the component that will be passed of as HTML attributes
const RankingGrid = ({ items, imageArray }) => {
  // This is a really bad way to program this, I'll have to improve it later
  const rankingGrid = [];
  const cellCollectionTop = [];
  const cellCollectionHalfTop = [];
  const cellCollectionHalfBottom = [];
  const cellCollectionBottom = [];

  function pushCellMarkupToArray(cellCollection, rankingNumber, rowLabel) {
    if (rankingNumber <= 0) {
      cellCollection.push(
        <div className="row-label">
          <h4>{rowLabel}</h4>
        </div>
      );
    }

    let item = items.find((o) => o.ranking === rankingNumber);

    cellCollection.push(
      <div id={`rank-${rankingNumber}`} className="rank-cell">
        {item}
      </div>
    );
  }

  function createCellsForRow(rowNumber) {
    let rankingNumber = 0;
    let currentCollection = [];
    let rowLabel = "";
    const cellNumber = 5;

    for (let i = 1; i <= cellNumber; i++) {
      rankingNumber = calculateRankingNumber(i, cellNumber, rowNumber);
    }

    switch (rowNumber) {
      case 1:
        currentCollection = cellCollectionTop;
        rowLabel = "Top Tier";
        break;
      case 2:
        currentCollection = cellCollectionHalfTop;
        rowLabel = "Half Top Tier";
        break;
      case 3:
        currentCollection = cellCollectionHalfBottom;
        rowLabel = "Half Bottom Tier";
        break;
      case 4:
        currentCollection = cellCollectionBottom;
        rowLabel = "Bottom Tier";
        break;
      default:
        break;
    }

    pushCellMarkupToArray(currentCollection, rankingNumber, rowLabel);
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
