const state = ['서울특별시', '부산광역시', "대구광역시", "인천광역시", '광주광역시', "대전광역시", '울산광역시', '세종특별자치시', "경기도", "강원특별자치도", "충청북도", "충청남도", "전북특별자치도", "전라남도", "경상북도", "경상남도", "제주특별자치도"];
export const DropInput = ({ category }: { category: string }) => {
  const arr = state;
  return (<>
    <select name={category} id={category} className="px-2 py-2 m-2 rounded-md border">
      {arr.map((item, idx) =>
        <option value={item} key={idx}>{item}</option>
      )}

    </select>
  </>);
};