import React, { useState, useEffect } from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonPopover,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonRange,
  IonLabel,
  IonItemDivider,
} from "@ionic/react";

import { informationCircle } from "ionicons/icons";
import "./Tab1.css";

import useData from "../components/useData";

import { Plugins, Capacitor } from "@capacitor/core";

const Tab1: React.FC = () => {

  useEffect(() => {
    if (Capacitor.isNative) {
      Plugins.App.addListener("backButton", (e) => {
        if (window.location.pathname === "/") {
          // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Vuoi davvero uscire?");
          if (ans) {
            Plugins.App.exitApp();
          } 
        } else if (window.location.pathname === "/tab1") {
           // Show A Confirm Box For User to exit app or not
          let ans = window.confirm("Vuoi davvero uscire?");
          if (ans) {
            Plugins.App.exitApp();
          } 
        } 
      });
    }
  }, []);

  var [weight, setWeight] = useState<number>(60);
  var [fastingTime, setFastingTime] = useState<number>(24);
  var [surgeryLoss, setSurgeryLoss] = useState<number>(5);
  var [showPopoverLosses, setShowPopoverLosses] = useState(false);
  var [showPopoverNPO, setShowPopoverNPO] = useState(false);
  var [
    hourRequirement,
    npo_total,
    npo1,
    npo2,
    npo3,
    losses,
    lossesLabel,
    firstHour,
    secondHour,
    thirdHour,
    overForthHour,
    urinaryOutputMin,
    urinaryOutputMax,
  ] = useData(weight, fastingTime, surgeryLoss);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
              <IonLabel>Calcolatore</IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calcolatore</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItemDivider color="primary">
          <IonLabel>Dati</IonLabel>
        </IonItemDivider>

        <IonItem>
          <IonLabel>Peso (Kg)</IonLabel>
          <br />
          <IonInput
            class="ion-text-right"
            type="number"
            min="20"
            max="300"
            autofocus={true}
            inputmode="numeric"
            clearInput={true}
            clearOnEdit={true}
            value={weight}
            onIonChange={(e) => {
              if (e.detail.value === undefined) return;
              setWeight(parseInt(e.detail.value!, 10));
            }}
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel>Digiuno (h)</IonLabel>
          <IonInput
            class="ion-text-right"
            type="number"
            min="8"
            max="48"
            inputmode="numeric"
            clearInput={true}
            clearOnEdit={true}
            value={fastingTime}
            onIonChange={(e) => {
              if (e.detail.value === undefined) return;
              setFastingTime(parseInt(e.detail.value!, 10));
            }}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Perdite (ml/h)</IonLabel>
          <IonIcon
            icon={informationCircle}
            onClick={() => setShowPopoverLosses(true)}
          />
          <br />
          <IonInput
            class="ion-text-right"
            readonly={true}
            value={lossesLabel}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonRange
            snaps={true}
            ticks={true}
            min={1}
            max={9}
            pin={true}
            value={surgeryLoss}
            onIonChange={(e) => setSurgeryLoss(e.detail.value as number)}
          >
            <IonLabel slot="start">1</IonLabel>
            <IonLabel slot="end">9</IonLabel>
          </IonRange>
        </IonItem>

        <IonItemDivider color="tertiary">
          <IonLabel>Somministrazione Liquidi</IonLabel>
        </IonItemDivider>

        <IonItem class="strong">
          <IonLabel>Prima ora</IonLabel>
          <br />
          <IonInput
            class="ion-text-right"
            readonly={true}
            color="tertiary"
            value={firstHour}
          ></IonInput>
          <IonLabel>&nbsp;mL</IonLabel>
        </IonItem>

        <IonItem class="strong">
          <IonLabel>Seconda ora</IonLabel>
          <br />
          <IonInput
            class="ion-text-right"
            readonly={true}
            color="tertiary"
            value={secondHour}
          ></IonInput>
          <IonLabel>&nbsp;mL</IonLabel>
        </IonItem>

        <IonItem class="strong">
          <IonLabel>Terza ora</IonLabel>
          <br />
          <IonInput
            class="ion-text-right"
            readonly={true}
            color="tertiary"
            value={thirdHour}
          ></IonInput>
          <IonLabel>&nbsp;mL</IonLabel>
        </IonItem>

        <IonItem class="strong">
          <IonLabel>Ore successive</IonLabel>
          <br />
          <IonInput
            class="ion-text-right"
            readonly={true}
            color="tertiary"
            value={overForthHour}
          ></IonInput>
          <IonLabel>&nbsp;mL</IonLabel>
        </IonItem>

        <IonItemDivider color="dark">
          <IonLabel>Altre informazioni</IonLabel>
        </IonItemDivider>

        <IonItem>
          <IonLabel>Fabbisogno orario</IonLabel>
          <br />
          <IonInput
            class="ion-text-right"
            readonly={true}
            value={hourRequirement}
          ></IonInput>
          <IonLabel>&nbsp;mL/h</IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>Recupero NPO</IonLabel>
          <br />
          <IonIcon
            icon={informationCircle}
            onClick={() => setShowPopoverNPO(true)}
          />
          <IonInput
            class="ion-text-right"
            readonly={true}
            value={npo_total}
          ></IonInput>
          <IonLabel>&nbsp;mL</IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>Perdite</IonLabel>
          <br />
          <IonInput
            class="ion-text-right"
            readonly={true}
            value={losses}
          ></IonInput>
          <IonLabel>&nbsp;mL/h</IonLabel>
        </IonItem>

        <IonItem>
          <IonLabel>Output urinario</IonLabel>
          <br />
          <IonInput
            class="ion-text-right"
            readonly={true}
            value={urinaryOutputMin + " - " + urinaryOutputMax}
          ></IonInput>

          <IonLabel>&nbsp;mL/h</IonLabel>
        </IonItem>

        <IonPopover
          isOpen={showPopoverLosses}
          cssClass="my-custom-class"
          onDidDismiss={(e) => setShowPopoverLosses(false)}
        >
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonLabel color="primary">Perdite</IonLabel>
              </IonCol>
              <IonCol>
                <IonLabel color="primary">ml/h</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel>Lievi</IonLabel>
              </IonCol>
              <IonCol>
                <IonLabel>1-3</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel>Moderate</IonLabel>
              </IonCol>
              <IonCol>
                <IonLabel>4-6</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel>Gravi</IonLabel>
              </IonCol>
              <IonCol>
                <IonLabel>7-9</IonLabel>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonPopover>

        <IonPopover
          isOpen={showPopoverNPO}
          cssClass="my-custom-class"
          onDidDismiss={(e) => setShowPopoverNPO(false)}
        >
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonLabel color="primary">Ora</IonLabel>
              </IonCol>
              <IonCol>
                <IonLabel color="primary">Percentuale</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel>Prima</IonLabel>
              </IonCol>
              <IonCol>
                <IonLabel>50%</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel>Seconda</IonLabel>
              </IonCol>
              <IonCol>
                <IonLabel>25%</IonLabel>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonLabel>Terza</IonLabel>
              </IonCol>
              <IonCol>
                <IonLabel>25%</IonLabel>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonPopover>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
