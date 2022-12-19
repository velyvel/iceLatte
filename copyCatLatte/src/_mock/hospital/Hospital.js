import React from "react";

function Hospital({
    BPLCNM,
    SITETEL,
    SITEWHLADDR,
    RDNWHLADDR,
    X,
    Y
}) {
    return(
        <div className="hospital">
            <div className="BPLCNM"><b>{BPLCNM}</b></div>
            <div className="SITETEL">전화번호: {SITETEL}</div>
            <div className="SITEWHLADDR">지번주소: {SITEWHLADDR}</div>
            <div className="RDNWHLADDR">도로명주소: {RDNWHLADDR}</div>
            <br />
        </div>
    );
}
export default Hospital;