# syntax=docker/dockerfile:1

FROM node:lts-alpine
WORKDIR /E:
COPY . .
RUN yarn install --production
CMD ["mkdir munka/quizapp"]
CMD ["cd munka/quizapp"]
CMD ["npx expo-create quizbuzz"]
CMD ["cd quizbuzz"]
CMD ["npx expo install react-dom react-native-web @expo/metro-runtime"]
CMD ["npx expo install react-native-screens react-native-safe-area-context"]
CMD ["npm install @react-navigation/native-stack"]
CMD ["npx expo start"]
CMD ["npm install twrnc"]
CMD ["npm install react-native-svg"]
CMD ["npm i react-native-progress"]
EXPOSE 3000