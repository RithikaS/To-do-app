FROM node


ENV PATH="my-todo-app/node_modules/.bin:${PATH}"

COPY package.json /
RUN npm install --silent

COPY ./ ./

RUN npm run build

CMD ["npm", "run", "start"]

EXPOSE 3000