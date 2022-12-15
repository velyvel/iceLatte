import {useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

const AbandonedList = () => {

    const [abLists, setAbLists] = useState(null);
    const clickHandler = async () => {

        const serviceKey = "eMVfxUA%2FWCe5PDwQ%2FyOQYpyG8CN7YSnS5d1WIsyaPbpWB8XA5Y3frj21E9fUde73lxbrhL%2FZOZxxQveKRpOFkQ%3D%3D";
        const url= `https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?serviceKey=${serviceKey}&_type=json`;
        const response = await axios.get(url);
        setAbLists(response.data.response.body.items.item);

    };

    return(
        <div>
            <button type={"button"} className="btn btn-secondary" onClick={clickHandler}>유기동물 리스트</button>
            <hr/>
            <table className="table table-hover">
                <tbody>
                { abLists ?
                    abLists.map( (item, idx) => (
                        <tr key={idx}>
                            <td>{ item.chargeNm }</td>
                            <td>{ item.colorCd }</td>
                        </tr>
                        )
                    )
                    :
                    <tr><td colSpan={2}>정보를 확인하려면 클릭하세요</td></tr>
                }
                </tbody>
            </table>



        </div>
    );
};
export default AbandonedList;