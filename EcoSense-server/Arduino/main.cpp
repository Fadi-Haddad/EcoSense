#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>
#include "secrets.h"
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

Adafruit_BME280 bme;
float Temperature, Humidity;

WiFiClient client;
HTTPClient http;

void setup(){
    bme.begin(0x76); 
    Serial.begin(9600);
    delay(2000);
    WiFi.begin(ssid, password);
    Serial.print("Connecting to WIFI...");
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.print(".");
    }
    Serial.println("Connected to Wi-Fi");
}

void loop (){
    int AIQ = random(0, 100);
    int CO = random(0, 100);
    int CO2 = random(0, 100);
    int Temp = random(0, 100);
    int Humidity = random(0, 100);

    http.begin(client, serverUrl);
    http.addHeader("Content-Type", "application/json");
    String json = "{\"AQI\": " + String(AIQ) + ", \"CO\": " + String(CO) + ", \"CO2\": " + String(CO2) + ", \"Temp\": " + String(Temp) + ", \"Humidity\": " + String(Humidity) + "}";
    
  int httpResponseCode = http.POST(json);
  String response = http.getString();
  Serial.print("HTTP Response code: ");
  Serial.print(httpResponseCode);
  Serial.println(json);
  http.end();

    delay(5000);
}
