import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
} from "@ionic/react";

import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Soluzioni</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Soluzioni</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <IonLabel color="primary"></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel color="primary">Plasma</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel color="primary">Soluzione Fisiologica</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel color="primary">Ringer Lattato</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel color="primary">S.elettrolita reidratante III</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonLabel color="primary">pH</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>7,40</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>
                4,5
                <br />
                7,0
              </IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>
                5,5
                <br />
                7,0
              </IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>
                5,0
                <br />
                7,0
              </IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonLabel color="primary">Osmolarità (mOsm/L)</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>285</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>308</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>280</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>307</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonLabel color="primary">Sodio</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>140</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>154</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>132</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>140</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonLabel color="primary">Potassio</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>5</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>5</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>10</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonLabel color="primary">Calcio</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>2,2</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>4</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>5</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonLabel color="primary">Magnesio</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>1</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>3</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonLabel color="primary">Cloruro</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>100</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>154</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>112</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>103</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonLabel color="primary">Acetato</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>47</IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonLabel color="primary">Lattato</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>1</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>29</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonLabel color="primary">Bicarbonato</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>24</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonLabel color="primary">Citrato</IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel></IonLabel>
            </IonCol>
            <IonCol size="2">
              <IonLabel>8</IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
