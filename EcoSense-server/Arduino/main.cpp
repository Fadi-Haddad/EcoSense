#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>
#include "secrets.h"

WiFiClient client;
HTTPClient http;

void setup(){
    Serial.begin(9600);
    delay(2000);
    Serial.print("Connecting to WIFI...");
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.print(".");
  }
    Serial.println("Connected to Wi-Fi");
}