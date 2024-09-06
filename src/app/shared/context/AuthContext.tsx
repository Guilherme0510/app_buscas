// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { auth, db } from '../../firebaseConfig'; // Certifique-se de que o caminho está correto
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthContextType {
  user: any; 
  nome: string;
  avatar: string;
  loading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [nome, setNome] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('https://grupomapscartaodigital.com.br/img/mps.jpg');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const email = user.email || '';
        const nome = email.split('@')[0];
        const docRef = doc(db, 'usuarios', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNome(nome);
          setAvatar(docSnap.data()?.avatar || 'https://grupomapscartaodigital.com.br/img/mps.jpg');
        } else {
          await setDoc(docRef, {
            nome: nome,
            email: email,
            avatar: 'https://grupomapscartaodigital.com.br/img/mps.jpg',
          });
          setNome(nome);
          setAvatar('https://grupomapscartaodigital.com.br/img/mps.jpg');
        }
      } else {
        setUser(null);
        setNome('');
        setAvatar('https://grupomapscartaodigital.com.br/img/mps.jpg');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setNome('');
      setAvatar('https://grupomapscartaodigital.com.br/img/mps.jpg');
    } catch (error) {
      console.error("Erro ao deslogar:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, nome, avatar, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
