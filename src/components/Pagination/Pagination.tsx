import "./Pagination.css"

interface IProps {
  curPage: number,
  setCurPage: (page: number) => void,
  totalPages: number
}

export default function Pagination({ curPage, setCurPage, totalPages }: IProps) {
  const array = [];

  for (let i = 1; i <= totalPages; i++) {
    array.push(i)
  }

  return (
    <div className="pagination">
      <div className="track" style={{ width: `${array.length * 48 + (array.length - 1) * 8}px` }}>
        {
          array.map((elem, idx) => (
            <span
              tabIndex={idx}
              data-label={elem}
              className="_item"
              key={idx}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  setCurPage(
                    typeof elem === "number"
                      ? elem
                      : curPage
                  )
                }
              }}
              onClick={() => setCurPage(
                typeof elem === "number"
                  ? elem
                  : curPage
              )}
            ></span>
          ))
        }
      </div>
    </div>
  )
}
