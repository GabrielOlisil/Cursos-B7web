type TipoReq = 'GET' | 'POST';
interface RequestDetails {

    url: string,
    method: TipoReq
}



function req(url: string, method: TipoReq){
    //
}

let requi: RequestDetails = {url: "https://google.com.br", method: 'GET'};



req(requi.url, requi.method);