export const FirstComponent = ({ data, fn }) => {
    return (
        <div>
            <button onClick={() => {
                fn(10)
            }}>set 10</button>
            {data}</div>
    )
}
