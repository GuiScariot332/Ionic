import React, { useState } from 'react';
import {
  IonList,
  IonItem,
  IonLabel,
  IonNote,
  IonAvatar,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from '@ionic/react';
import { ellipse, checkmarkDoneOutline, trashOutline } from 'ionicons/icons';

const mensagensIniciais = [
  {
    id: 1,
    nome: 'Matt Chorsey',
    titulo: 'Novo evento: Viagem para Vegas',
    descricao: 'teste1',
    hora: '9:32',
    lida: false,
  },
  {
    id: 2,
    nome: 'Lauren Ruthford',
    titulo: 'Quanto tempo hein!',
    descricao: 'teste2',
    hora: '6:12',
    lida: false,
  },
  {
    id: 3,
    nome: 'Jordan Firth',
    titulo: 'Resultados do relatório',
    descricao: 'teste3',
    hora: '4:55',
    lida: false,
  },
];

const InboxList: React.FC = () => {
  const [mensagens, setMensagens] = useState(mensagensIniciais);

  const marcarComoLida = (id: number) => {
    setMensagens(prev =>
      prev.map(msg =>
        msg.id === id ? { ...msg, lida: true } : msg
      )
    );
  };

  const excluirMensagem = (id: number) => {
    setMensagens(prev =>
      prev.filter(msg => msg.id !== id)
    );
  };

  return (
    <IonList>
      {mensagens.map(msg => (
        <IonItemSliding key={msg.id}>
          <IonItem lines="full" button>
            <IonAvatar slot="start">
              <IonIcon icon={ellipse} color={msg.lida ? 'medium' : 'primary'} />
            </IonAvatar>
            <IonLabel>
              <h2><strong>{msg.nome}</strong></h2>
              <h3>{msg.titulo}</h3>
              <p>{msg.descricao}</p>
            </IonLabel>
            <IonNote slot="end">{msg.hora}</IonNote>
          </IonItem>

          <IonItemOptions side="end">
            <IonItemOption color="success" onClick={() => marcarComoLida(msg.id)}>
              <IonIcon icon={checkmarkDoneOutline} slot="icon-only" />
            </IonItemOption>
            <IonItemOption color="danger" onClick={() => excluirMensagem(msg.id)}>
              <IonIcon icon={trashOutline} slot="icon-only" />
            </IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      ))}
    </IonList>
  );
};

export default InboxList;
