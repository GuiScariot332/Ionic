import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import InboxList from '../components/InboxList';

const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Caixa de Entrada</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <InboxList />
    </IonContent>
  </IonPage>
);

export default Home;

