#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266HTTPClient.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>
#include <Adafruit_CCS811.h>

Adafruit_BME280 bme;
float Temperature, Humidity;
Adafruit_CCS811 ccs;

WiFiClient client;
HTTPClient http;

void setup(){
    bme.begin(0x76); 
    Serial.begin(9600);
    delay(2000);
    ccs.begin(); 
    delay(1000);
    WiFi.begin(ssid, password);
    Serial.print("Connecting to WIFI...");
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.print(".");
    }
    Serial.println("Connected to Wi-Fi");
}

void loop (){
    float COSensorValue;

    float CO2 = ccs.geteCO2();
    float AQI = ccs.getTVOC();

    float Temperature = bme.readTemperature();
    float Humidity = bme.readHumidity();

    COSensorValue = analogRead(A0);
    float CO = 25*((COSensorValue/1024)-0.1);

    http.begin(client, serverUrl);
    http.addHeader("Content-Type", "application/json");
    String json = "{\"AQI\": " + String(AQI) + ", \"CO\": " + String(CO) + ", \"CO2\": " + String(CO2) + ", \"Temp\": " + String(Temperature) + ", \"Humidity\": " + String(Humidity) + "}";
    
    int httpResponseCode = http.POST(json);
    String response = http.getString();
    Serial.print("HTTP Response code: ");
    Serial.print(httpResponseCode);
    Serial.println(json);
    http.end();
    delay(5000);
}