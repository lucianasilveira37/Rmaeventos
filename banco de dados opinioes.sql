PGDMP  
    &                 }            galeria_opinioes    16.6    16.6     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398    galeria_opinioes    DATABASE     �   CREATE DATABASE galeria_opinioes WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
     DROP DATABASE galeria_opinioes;
                postgres    false            �            1259    16443    opinioes    TABLE     �   CREATE TABLE public.opinioes (
    id integer NOT NULL,
    nome character varying(100),
    mensagem text,
    data timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.opinioes;
       public         heap    postgres    false            �            1259    16442    opinioes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.opinioes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.opinioes_id_seq;
       public          postgres    false    216            �           0    0    opinioes_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.opinioes_id_seq OWNED BY public.opinioes.id;
          public          postgres    false    215                       2604    16446    opinioes id    DEFAULT     j   ALTER TABLE ONLY public.opinioes ALTER COLUMN id SET DEFAULT nextval('public.opinioes_id_seq'::regclass);
 :   ALTER TABLE public.opinioes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            �          0    16443    opinioes 
   TABLE DATA           <   COPY public.opinioes (id, nome, mensagem, data) FROM stdin;
    public          postgres    false    216   �
       �           0    0    opinioes_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.opinioes_id_seq', 1, true);
          public          postgres    false    215                       2606    16451    opinioes opinioes_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.opinioes
    ADD CONSTRAINT opinioes_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.opinioes DROP CONSTRAINT opinioes_pkey;
       public            postgres    false    216            �   <   x�3�LN,�I�,)M�WHIUH���4202�50�5�P0��21�21�3�0763����� r�1     