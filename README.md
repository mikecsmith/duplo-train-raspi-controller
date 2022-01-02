# Duplo Train Control Station

## Introduction

This is the beginnings of a Lego Duplo Train physical control station using a Raspberry Pi, an analogue to digital converter and a potentiometer.

## Requirements

* Raspberry Pi 3/4/Zero 2W
* ADS1015 Analogue to Digital Converter (this could easily be switched for a ADS1115)
* Potentiometer

## Assumptions

This project assumes a few things about the wiring of the potentiometer to the ADS1015:

- Potentiometer's input is wired to Raspberry Pi's 3.3v pin not 5v pin
- Potentiometer's data pin wired to `A0` of the ADS1015.
