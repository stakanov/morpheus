import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonIcon, IonList } from '@ionic/react';

import './Tab3.css';
import { heart } from "ionicons/icons";

export const VERSION = "1.1";
export const VERSION_DATE = "10/11/2020";
export const LICENSE = "GPLv3";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Info</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
        <IonItem><IonLabel>Versione</IonLabel><IonLabel>{VERSION}</IonLabel></IonItem>
        <IonItem><IonLabel>Data</IonLabel> <IonLabel> {VERSION_DATE}</IonLabel></IonItem>
        <IonItem><IonLabel>Licenza</IonLabel><IonLabel>{LICENSE}</IonLabel></IonItem>
        <IonItem></IonItem>
        <IonItem href="mailto:senatoredaniele@gmail.com" target="_blank"><IonLabel color="danger" class="ion-text-center">Segnala suggerimenti e malfunzionamenti</IonLabel></IonItem> 
        <IonItem></IonItem>
        <IonItem><IonLabel class="ion-text-center" color="secondary">Made with <IonIcon icon={heart} color="danger"/> by Stakanov</IonLabel></IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
