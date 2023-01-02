import React, { ChangeEvent } from "react";


interface Props {
    addTitle: string;
    setAdtitle: (title: string) => void;
    addBody: string;
    setAdBody: (message: string) => void;
    onAdd: (title: string, body: string) => void;
}

export const PostForm = ({ addTitle, setAdtitle, addBody, setAdBody, onAdd, ...props }: Props) => {
    return (

        <fieldset style={{ display: "flex", flexDirection: "column" }}>
            <legend>Adicionar post</legend>
            <input type="text" placeholder='Título' value={addTitle} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setAdtitle(e.target.value);
            }} />
            <textarea placeholder='Mensagem' value={addBody} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                setAdBody(e.target.value);
            }}></textarea>
            <button onClick={() => {
                if (!addBody || !addTitle) {
                    alert("Preencha os dados corretamente");
                    return;
                }
                else {
                    onAdd(addTitle, addBody);
                }
            }

            }>Adicionar</button>

        </fieldset>
    );
}