"""
Django settings for sf_web_server project.
Generated by 'django-admin startproject' using Django 4.1.2.
For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/
For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""
import pathlib
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-7nq5*&r3badmo(4r9jezck=h9*#u=w&4sa)@+g=9#@#*8w%$2r'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['http://localhost:3000',
                 'localhost',
                 'http://131.123.39.125:3000',
                 "131.123.39.125"]

# Application definition

INSTALLED_APPS = [
    'rest_framework',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'django_extensions',
    'django_filters',
    'django_quill',
    'sf_web_server.user_auth.apps.UserAuthConfig',
    'sf_web_server.content.apps.ContentConfig',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'sf_web_server.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [pathlib.Path(BASE_DIR).parent.joinpath("sf_web_client")],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'sf_web_server.wsgi.application'

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'kent_silver_foxes',
        "USER": 'kent_silver_fox',
        'PASSWORD': 'kent_silver_foxes',
        "HOST": 'localhost',
        'PORT': "5432"
    }
}

# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.user_auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.user_auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.user_auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.user_auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'

STATIC_ROOT = './static'
MEDIA_ROOT = './media'

STATICFILES_DIRS = [
    pathlib.Path(BASE_DIR).parent.joinpath("sf_web_client", 'build', 'static')
]

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}

CORS_ORIGIN_ALLOW_ALL = True
# CORS_ORIGIN_WHITELIST = (
#   'http://localhost:3000',
#   'http://localhost:8000',
# )
#
# CORS_ALLOWED_ORIGINS = [
#     "http://localhost:3000",
# ]
#
# CORS_ALLOW_METHODS = [
# 'DELETE',
# 'GET',
# 'OPTIONS',
# 'PATCH',
# 'POST',
# 'PUT',
# ]
#
# CORS_ALLOW_HEADERS = [
# 'accept',
# 'accept-encoding',
# 'authorization',
# 'content-type',
# 'dnt',
# 'origin',
# 'user-agent',
# 'x-csrftoken',
# 'x-requested-with',
# ]
