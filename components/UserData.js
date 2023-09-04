import { useEffect } from "react";

const UserData = ({ datas }) => {

    useEffect(() => {
        console.log("hagla", datas);
    })
    return (
        <>
            {/*
                datas.map((Shortenurl) => {
                    const { id, URL } = Shortenurl;

                    return (
                        <tr>
                            <td>{id}</td>
                            <td>{URL}</td>
                            <td>{"delete"}</td>
                        </tr>
                    )

                })
            */ }
            <div><h1>hello</h1></div>
        </>
    );
}

export default UserData;