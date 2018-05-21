#official nginx
FROM nginx
#add file
COPY ./dist /usr/share/nginx/html
