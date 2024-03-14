/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from 'react'
import "./Select.css"

interface IProps {
  genres: { id: number, name: string }[],
  config: object,
  setConfig: (obj: object) => void,
  setCurPage: (num: number) => void
}

export default function Select({ genres, config, setConfig, setCurPage }: IProps) {
  const [selectValue, setSelectValue] = useState<{ id: number, name: string }>(genres[0])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setConfig({ ...config, with_genres: selectValue.id });
    setCurPage(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectValue])
  return (
    <ul className="custom-select">
      <li className="_default"
        data-value={selectValue?.id}
        onClick={() => setIsOpen(true)}
      >{selectValue?.name}</li>
      <ul className="_group">
        {
          genres?.map((genre: { id: number, name: string }) => (
            <li
              key={genre.id}
              style={{ display: isOpen ? "block" : "none" }}
              data-value={genre.id}
              className="__option"
              /* @ts-expect-error */
              onClick={({ target: { dataset: { value } } }) => {
                setIsOpen(false)
                if (value !== selectValue.id)
                  setSelectValue({ ...selectValue, id: value, name: genre.name })
              }}>{genre.name}</li>
          ))
        }
      </ul>
    </ul>
  )
}
