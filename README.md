# morpheus
Cassetta degli attrezzi dell'anestesista


## Ionic
### 1. Inizializzazione

```
ionic start morpheus tabs --type=react --capacitor
```

### 2. Avvio
```
cd morpheus
ionic serve
```

### 3. Capacitor
```
npx cap init Morpheus com.stakanov.morpheus
ionic build
npx cap add android
npx cap add ios
```

### 4. Android studio
```
npx cap copy
npx cap open android
```

#### Risorse
- Aggiungere le icone [https://enappd.com/blog/icon-splash-in-ionic-react-capacitor-apps/114/]
