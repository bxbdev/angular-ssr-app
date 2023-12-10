import requests
from bs4 import BeautifulSoup

url = 'http://localhost:4000'

response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    print(soup.prettify())
    
    # h2_tags = soup.find_all('h2')
    # for tag in h2_tags:
    #     print(tag.text)
    # p_tags = soup.find_all('p')
    # for tag in p_tags:
    #     print(tag.text)
else:
    print(f'Failed to retrieve the page: {response.status_code}')