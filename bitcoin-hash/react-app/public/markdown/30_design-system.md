## ![alt text](../svg/logo16.svg "Bitcoin Hash Logo")  Design System

Based on several years of constant iteration, the project is bootstrapped with Material UI, listingslab custom components containing all the features I need to rapidly create a full PWA. Example: [&lt;Icon icon="rocket" /&gt;](https://github.com/listingslab/bitcoin-hash/blob/master/react-app/src/BitcoinHash/components/Icon.tsx)


> Demonstrating GitHub protocol, [feature/design-system](https://github.com/listingslab/bitcoin-hash/tree/feature/design-system)  raises a [PR](https://github.com/listingslab/bitcoin-hash/pull/3) to staging 

## Overview

Start with loading the Design system and some other components that will let us more rapidly develop our app

- Material UI (MUI)
- Custom theme
- Icon (component)
- Font (component)

## Responsiveness

Responsiveness is important and should be defined and implements from the start. It might seem overkill to add responsiveness to a prototype, but it IS that important and needs to be there from the start

## Progressive Web App

This is a fully qualified Progressive Web App. It has a service worker and and a manifest meaning it can be installed on chrome by clicking the install button in the address bar. Android phones will offer the install option automatically, but iPhone users have to ‘Add to homescreen’


![alt text](../png/pwa-install-2.png "PWA")
